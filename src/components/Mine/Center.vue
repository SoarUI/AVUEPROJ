<template>
<div>
   <div> 个人中心:{{$store.state.login.username}}</div>
   <div><a href="javascript:;" @touchstart="handlelogout">退出</a></div>
</div>
</template>

<script>
import {messagebox} from '@/components/js'
import axios from 'axios';
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
             vm.$store.commit('login/LOGININFO',{username:res.data.data.username,userId:-1});
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
            messagebox({
               title:'退出',
               conten:res.data.msg,
               ok:'确定',
               handleok(){
                  that.$router.push('/Mine/Login');
               }
            });
         }
      })
   }
}
}
</script>

<style>

</style>
