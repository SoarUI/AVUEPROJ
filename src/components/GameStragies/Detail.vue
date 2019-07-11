<template>
    <div class="detailcontainer" >
        <Header title="详情页">
            <i class="iconfont icon-fanhui1" @touchstart="handleToback"></i>
        </Header>
        <Loading v-if="isLoading" />
        <div class="detail" v-else>
            <div class="info_list" >
                <h2>游戏名称:{{detailobj.Title}}</h2>
                <i>英文名称:{{detailobj.eTitle}}</i>
                <div class="Line"><span class="p-left">好玩度: <span class="grade">{{detailobj.grade}}</span></span><span class="p-right">作者:{{detailobj.author}}</span></div>
                <div class="Line"><span class="p-left">发行方: {{detailobj.ISP}}</span><span class="p-right">发行日期:{{detailobj.author}}</span></div>
                <div class="info">{{detailobj.content}}</div>
                
            </div>
            <supercomment :ItemID="Id"/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import supercomment from '@/components/superpinglun'
export default {
name:'detailforstragies',
props:['Id'],
components:{
    Header,
  supercomment
},
data(){
    return {
         isLoading:false,
         detailobj:{type:Object,default:null}
    }
},
methods:{
    handleToback:function(){
        this.$router.back();
    }
},
mounted(){
      this.axios.get('/api/stragies/stragiesdetail?id='+this.$route.params.Id).then( (res)=>{
        this.Msg = res.data.status;
        this.detailobj = res.data.data;
        this.$nextTick( ()=>{
            setTimeout(() => {
                        this.isLoading = false;
                    }, 1000);
       
        });//nexttick
       
    }).catch((res)=>{
        alert(res);
    });
},
}
</script>

<style scoped>
#main .detailcontainer{position:absolute;left:0;top:0;width: 100%;min-height:100%;z-index: 100;background-color: aliceblue;}
.detailcontainer .detail{margin-left: 10px;flex:1;position: relative; max-height:100%;}
.detail .info_list{ flex:1;position: relative; }
.detail .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;
                        white-space: nowrap;text-overflow: ellipsis;}
.detail .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;
                    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
.detail .info_list .p-right{float:left;flex:1;
                    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
.detail .info_list .p-left{float:left;flex:1;
                    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
.detail .info_list .Line{float:left;display:flex;flex-direction: row; white-space: nowrap;text-overflow:ellipsis;width:100%;}
.detail .info_list .info{font-size: 13px;color: #666;line-height: 22px;width: 100%;
                        white-space:normal;text-overflow:ellipsis;}
.detail .info_list .p-left .grade{font-size: 15px;font-weight: 700;color: #faaf00;}
</style>
