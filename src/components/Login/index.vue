<template>
   <div class="login_body">
      <div >
          用户名：
          <input type="text" class="login_text" v-model="username" placeholder="请输入手机/邮箱" />
      </div>
      <div >
          密码：
          <input class="login_text" type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="login_btn">
          <input type="submit" @touchstart="handleToLogin" value="登录" />
      </div>
   <div class="login_link">
       <a href="./Mine/Register" >注册账号 </a>     <a href="./">忘记密码</a>
   </div>
   </div>
</template>

<script>
export default {
name:'Login',
data(){
    return {
        username:'',
        password:''
    }
},
methods:{
handleToLogin(){
    this.axios.post('/api/users/login',{
        username:this.username,
        password:this.password
    }).then((res)=>{
        var status =res.data.status;
    })
}
}
}
</script>

<style scoped>
.login_body{width:100%;}
.login_body .login_text{width:100%;height:40px;border:none;border-bottom: 1px solid #ccc;margin-bottom: 5px;outline: none;}
.login_body .login_btn{width:100%;height:50px;margin: 10px;}
.login_body .login_btn input{width: 100%;background: #e54847 ;border-radius: 3px;border:none;display:block;color:#e54847;}
.login_body .login_link{display:flex;flex-flow:row nowrap;justify-content: space-between;}
.login_body .login_link a{text-align: center;text-decoration: none;margin:0 5px;font-size: 12px;color: #e54847;}
</style>
