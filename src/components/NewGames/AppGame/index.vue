<template>
<div class="_body" ref="_body">
    <Loading v-if="isLoading" />
    <Scroller :handleToScroll="handleScroll" :handleToTouchEnd="handleTouchEnd" v-else>
    <ul>
        <li>{{pullDownMsg}}</li>
          <li v-for="item in NewGameList" :key="item.ItemID" >
            <div class="pic_show" @tap="handleDetail(item.ItemID)" ><img :src="item.ImgDescUri"></div>
            <div class="info_list">
                <h2>{{item.ItemName}}</h2>
                <p>观众评<span class="grade">9.2</span></p>
                <p>运营商:{{item.ImgDescUri}}</p>
                <p>制作商：{{Msg}}</p>

            </div>
            <div class="btn_mall" @tap="handleDetail(item.ItemID)">
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
name:'AppGame',
data(){
return{
    NewGameList:[],
    Msg:'',
    pullDownMsg:'',
    PageIndex:0,
    PageSize:20,
    isLoading:true
}
},
mounted(){
    this.axios.get('/Users/GetTopNewGames').then( (res)=>{
        this.Msg = res.statusText;
        this.NewGameList = res.data;
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
    this.$router.push('/NewGames/Detail/1/'+id);
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
            this.axios.get('/api/Users/GetTopNewGames?page='+this.PageIndex+'&rows='+this.PageSize).then( (res)=>{
                if(res.statusText ==='OK'){
                    this.pullDownMsg="更新成功..";
                    setTimeout(() => {
                       this.NewGameList = res.data;  
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
