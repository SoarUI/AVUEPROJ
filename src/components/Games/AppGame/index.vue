<template>
<div class="_body">
    <Loading v-if="isLoading" />
    <Scroller :handleToScroll="handleScroll" :handleToTouchEnd="handleTouchEnd" v-else>
    <ul>
        <li>{{pullDownMsg}}</li>
          <li v-for="item in AppGameList" :key="item.Id">
            <div class="pic_show" @tap="handleDetail(item.Id)"><img :src="item.coverimg"></div>
            <div class="info_list">
                <h2>{{item.ItemName}}</h2>
                <p>好玩度<span class="grade">{{item.grade}}</span></p>
                <p>运营商:{{item.ISP}}</p>
                <p>发行商：{{item.author}}</p>

            </div>
            <div class="btn_mall" @tap="handleDetail(item.Id)">
                详情
            </div>
        </li>
    </ul>
    </Scroller>
</div>
</template>

<script>
import bscroll from 'better-scroll';
export default {
name:'AppGames',
data(){
return{
    AppGameList:[],
    Msg:'',
    pullDownMsg:'',
    PageIndex:0,
    PageSize:20,
    isLoading:true
}
},
mounted(){
    this.axios.get('/api/game/GetGamelist?type=1').then( (res)=>{
        this.Msg = res.data.status;
        this.AppGameList = res.data.data;
        this.$nextTick( ()=>{
            setTimeout(() => {
                        this.isLoading = false;
                    }, 1000);
       
        });//nexttick
       
    }).catch((res)=>{
        alert(res);
    });

},
methods:
{
    handleDetail:function(id)
    {
    this.$router.push('/Games/Detail/1/'+id);
    },
    handleScroll:function(pos){
         if(pos.y > 15 ){
                this.pullDownMsg="松开更新...";
            }
    },
    handleTouchEnd:function(pos){
        if(pos.y > 15 ){
            this.pullDownMsg="";
            this.PageIndex++;
            this.axios.get('/api/game/GetGamelist?type=1&page='+this.PageIndex+'&rows='+this.PageSize).then( (res)=>{
                if(res.statusText ==='OK'){
                    this.pullDownMsg="更新成功..";
                    setTimeout(() => {
                       this.AppGameList = res.data;  
                       this.pullDownMsg="";
                    }, 1000);
                }
            });
        }
    }
}
}
</script>

<style scoped>
#content ._body{flex:1;overflow: auto;}
._body ul{margin:0 12px;overflow: hidden; }
._body ul li{margin-top:12px;display: flex;align-items:center;border-bottom: 1px #e6e6e6 solid;padding-bottom: 10px;}
._body .pic_show{width:64px;height:90px;overflow: hidden;}
._body .pic_show img{width:100%;}
._body .info_list{margin-left: 10px;flex:1;position: relative;}
._body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
._body .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
._body .info_list .grade{font-size: 15px;font-weight: 700;color: #faaf00;}
._body .btn_mall,._body .btn_pre{width:47px;height:27px;line-height: 28px;text-align: center;background-color: #e6e6e6;}
._body .btn_pre{background-color: #3c9fe6;}
</style>
