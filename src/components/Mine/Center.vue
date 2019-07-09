<template>
<div class="main">
    <div class="left-nav">
        <ul>
            <router-link tag='li' to='/Mine/Center/Selfimg'>
                <i class="iconfont icon-chongzhi2"></i>
                <div>头像</div>
                
            </router-link>
            <router-link tag='li' to='/Mine/Center/writestragies'>
                <i class="iconfont icon-qunfariji"></i>
                <div>写攻略</div>
            </router-link>
            <router-link tag='li' to='/Mine/Center/myarticle'>
                <i class="iconfont icon-xiaofeijilu"></i>
               <div>我的文章</div>
            </router-link>
            <router-link tag='li' to='/Mine/Center/chiongzhi'>
                <i class="iconfont icon-chongzhi01"></i>
                <div>充值</div>
            </router-link>
            <li>
                <i class="iconfont icon-logout"></i>
                <div><a href="javascript:;" @touchstart="handlelogout">退出</a></div>
            </li>
        </ul>
    </div>
   <!--
   <div> 个人中心:{{$store.state.login.username}}</div>
   <div><a href="javascript:;" @touchstart="handlelogout">退出</a></div>
   <div v-if="$store.state.login.isAdmin">当前身份：管理员<router-link to="/admin"  target="_blank">进入管理后台</router-link></div>
   <div v-else>当前身份：普通会员</div>
   -->
   <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios';
import leftnav from '@/components/Mine/leftnav'
export default {
name : 'personal_center',
mounted()
{
   
},
//组件内路由守卫
beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    axios.get('/api/user/getUsers').then((res)=>{
       var status = res.data.status;
       if(status === 0){

          next(vm=>{
             vm.$store.commit('login/LOGININFO',{
                username:res.data.data.username,
                userId:-1,
                isadmin:res.data.data.isadmin,
                isfreeze:res.data.data.isfreeze,
                clientToken:res.data.data.clientID,
                icon:res.data.data.icon
                });
                       });
       }else{
          next('/Mine/Login');
       }
    })
  },
methods:{
   handlelogout:function(){
      this.axios.post('/api/user/logout').then((res)=>{
         var status =res.data.status;
         if(status ===0 ){
            var that =this;
            this.$mybox({
               title:'退出',
               conten:res.data.msg,
               ok:'确定',
               handleok(){
                  that.$router.push('/Mine/Login');
               }
            });
         }
      })
   },
  
    
},
data(){
   return {
      icon:''
   }
},
components:{
   leftnav
}
}
</script>

<style scoped>
 .main{
    width:100%;
    height:100%;
    margin-top:0;
    padding: 0;
 }
 .left-nav{
    float:left;
    height:100%;
    width:20%;
    color:#fff;
    font-size:10px;
    background-color:#e54847;/*#1D8CE0;*/
    margin: 0;
}
.iconfont{
    font-size: 24px;

}
.left-nav ul{
    height:100%;
    width:100%;  
}
.left-nav ul li{
    list-style: none;
    text-align: center;
    padding:10px;
}
.left-nav ul li a{
   text-decoration: none;
   color:#fff;
}
.router-link-active{
    border-right: 1px solid #fff;
     border-bottom: 2px solid #fff;
     border-top: 2px solid #fff;
}
    
</style>
