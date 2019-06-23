<template>
<div>
</div>
</template>

<script>
import {messagebox} from '@/components/js'
import axios from 'axios';
export default {
name : 'admin',
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
      this.axios.post('/api/admin/logout').then((res)=>{
         var status =res.data.status;
         if(status ===0 ){
            var that =this;
            messagebox({
               title:'退出',
               conten:res.data.msg,
               ok:'确定',
               handleok(){
                  that.$router.push('/user/Login');
               }
            });
         }
      })
   }
}
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 40px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
   .el-container {
    margin-bottom: 40px;
  }
</style>
