<template>
    <div class="_body">
    <Loading v-if="isLoading" />
    <Scroller :handleToScroll="handleScroll" :handleToTouchEnd="handleTouchEnd" v-else>
    <ul>
        <li>{{pullDownMsg}}</li>
          <li v-for="item in stragiesList" :key="item.Id">
            <div class="pic_show" @tap="handleDetail(item.Id)"><img :src="item.coverimg"></div>
            <div class="info_list">
                <h2>{{item.Title}}</h2>
                <i>{{item.eTitle}}</i>
                <div class="Line"><span class="p-left">好玩度 <span class="grade">{{item.grade}}</span></span><span class="p-right">作者:{{item.author}}</span></div>
                <div class="info">{{item.content}}</div>
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
export default {
name:'AppStragies',
data(){
    return{
        stragiesList:[],
        Msg:'',
        pullDownMsg:'',
        PageIndex:0,
        PageSize:20,
        isLoading:true
    }
},
mounted(){
      this.axios.get('/api/stragies/GetTopStragies?type=3').then( (res)=>{
        this.Msg = res.data.status;
        this.stragiesList = res.data.data;
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
    this.$router.push('/GameStragies/Detail/3/'+id);
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
            this.axios.get('/api/stragies/GetStragies?type=3&page='+this.PageIndex+'&rows='+this.PageSize).then( (res)=>{
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
._body ul{margin:0 12px;overflow:hidden;}
._body ul li{margin-top:12px;display: flex;align-items: center;border-bottom: 1px #e6e6e6 solid;padding-bottom: 10px;}
._body .pic_show{width:64px;height:90px;overflow: hidden;}
._body .pic_show img{width:100%;}
._body .info_list{margin-left: 10px;flex:1;position: relative;}
._body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;
                        white-space: nowrap;text-overflow: ellipsis;}
._body .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;
                    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
._body .info_list .p-right{float:left;flex:1;
                    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
._body .info_list .p-left{float:left;flex:1;
                    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
._body .info_list .Line{float:left;display:flex;flex-direction: row; white-space: nowrap;text-overflow:ellipsis;width:100%;}
._body .info_list .info{font-size: 13px;color: #666;line-height: 22px;width: 100%;
                        white-space:normal;text-overflow:ellipsis;}
._body .info_list .p-left .grade{font-size: 15px;font-weight: 700;color: #faaf00;}
._body .btn_mall,._body .btn_pre{width:47px;height:27px;line-height: 28px;text-align: center;background-color: #e6e6e6;}
._body .btn_pre{background-color: #3c9fe6;}
</style>

