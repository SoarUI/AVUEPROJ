<template>
<div>
   <div> 个人中心:{{$store.state.login.username}}</div>
   <div><a href="javascript:;" @touchstart="handlelogout">退出</a></div>
   <div v-if="$store.state.login.isAdmin">当前身份：管理员<a href="/admin"  target="_blank">进入管理后台</a></div>
   <div v-else>当前身份：普通会员</div>
   <div>
      <p style="height:24px;margin-bottom:0px;">用户头像(点击下方上传): </p>
      <p class="Img-p"><input type="file" name="file" id="file" class="fileinput" @change="handleIconChange"/>
      <img :src="icon"  id="imgshow"/></p>
   </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
name : 'personal_center',
mounted()
{
   this.icon =this.$store.state.login.icon;
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
   handleIconChange(env){
      var file = env.target.files[0];
      var param = new FormData();
      param.append('file',file,file.name);
      var config={
         headers:{
            'Content-Type':'multipart/form-data'
         }
      };
      this.axios.post('/api/admin/upload',param,config).then((res)=>{
         var status =res.data.status;
         if(status ===0 ){
            var that =this;
            this.icon="123.jpg";
         }
      });
      //this.$this.$mybox("khklahlda;da;d");
   }
},data(){
   return {
      icon:''
   }
}
}
</script>

<style scoped>
 .Img-p{float:left;
         width:200px;
         height:200px;
         overflow:hidden;
         background-color:Green;
          margin-top:0px;
          position:relative;
    }
    p
    {
        height:45px;
        margin-top:10px;
    }
    .fileinput{
       opacity:0;
       width:200px;
       height:200px;
       position:absolute;
       top:0;
       left:0;
       border-radius:50%;


    }
</style>
