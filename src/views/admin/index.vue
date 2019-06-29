
<template>
<div>
   <el-container>
      <el-header>{{$store.state.login.username}}</el-header>
      <el-container>
         <el-aside width="200px">
            <el-menu
            default-active="2"
            class="el-menu-vertical"
            >
                  <el-submenu index="1">
                  <template slot="title">
                     <i class="el-icon-location"></i>
                     <router-link tag="span" to="users">用户管理</router-link>
                  </template>
                  <el-menu-item-group>
                     <template slot="title">分组一</template>
                     <el-menu-item index="1-1">选项1</el-menu-item>
                     <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                     <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                     <template slot="title">选项4</template>
                     <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">游戏分享</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <router-link tag="span" to="users" slot="title">游戏攻略</router-link>
                  </el-menu-item>
                  <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <router-link tag="span" to="users" slot="title">11111</router-link>
                  </el-menu-item>
            </el-menu>
         </el-aside>
         <el-main>
            <router-view />
         </el-main>
      </el-container>
   </el-container>
   
</div>
</template>

<script>
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
             vm.$store.commit('login/LOGININFO',{
                username:res.data.data.username,
                userId:-1,
                isadmin:res.data.data.isadmin,
                isfreeze:res.data.data.isfreeze,
                clientToken:res.data.data.clientID
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
  }
  
   .el-container {
    margin-bottom: 40px;
  }
</style>
