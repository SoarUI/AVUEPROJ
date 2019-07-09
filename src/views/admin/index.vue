
<template>
<div>
   <el-container>
      <el-header>{{$store.state.login.username}}
         <div class="breadbar">
            <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
               <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
         </el-breadcrumb>
         </div>
         <div class="sidebar">
             <div class="iconblock">
               
              <!-- <el-image
               style="width: 50px; height: 50px;flex:1;"
               :src="squareUrl"
               :fit="fit"></el-image>-->
                <el-badge :value="12" class="item" style="flex:1;">
                  <el-button size="small">消息</el-button>
               </el-badge>
            </div>
            <el-dropdown style="float:right;">
               <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
               </span>
               <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
               </el-dropdown-menu>
            </el-dropdown>
         </div>
      </el-header>
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
                  <router-link tag="span" to="mapapi" slot="title">游戏攻略</router-link>
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
data(){
   return {
      levelList: [],
       squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
   }
},
watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb();
        },
mounted()
{
   //this.realList = this.$route.meta.routeList;
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
               // vm.realList = to.meta.routeList;
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
   getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name)
                const first = matched[0];
                if (first && first.name.trim().toLocaleLowerCase() 
                !== 'admin'.toLocaleLowerCase()) {//如果不包含当前，则加上
                    matched = [{ path: '/admin', meta: { title: 'admin' }}].concat(matched)
                }
                this.levelList = matched
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
    display:flex;
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
  /**/
  .el-header .sidebar{
     float:right;
     height:50px;
     flex:1;
  }
  .el-header .breadbar{
     float:left;
     margin-left: 50px;
     margin-top: 30px;
     height:50px;
     flex:1;
     color: #D3DCE6;
  }
   .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .iconblock{
     float:right;display:flex;
  }
</style>
