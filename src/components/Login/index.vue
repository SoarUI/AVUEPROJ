<template>
   <div class="login_body">
      <div class="usercontainer">
          用户名：
          <input type="text" class="login_text" v-model="username" placeholder="请输入用户名" />
      </div>
      <div >
          密码：
          <input class="login_text" type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="login_btn">
          <input type="submit" value='登录' @touchstart="handleToLogin"  />
      </div>
   <div class="login_link">
       <a href="/Mine/Register" >注册账号 </a>     <a href="/Mine/ForgetPassword">忘记密码</a>
   </div>
   </div>
</template>

<script>
import {messagebox} from '@/components/js'


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
    if(this.username==='' ||this.password===''){
        return;
    }
    this.axios.post('/api/user/login',{
        username:this.username,
        password:this.password
    }).then((res)=>{
        var status =res.data.status;
        var that= this;
        console.log(res.data);
        if(status ===0)
        {
            this.$store.commit('login/SET_TOKEN',{clientToken:res.data.clientID,userId:-1});
            messagebox({
                title:'登陆',
                content:res.data.msg,
                ok:'确定',
                handleok(){
                     that.$router.push('/Mine/Center');
                }
            });
           
        }
        else{
            //
            messagebox({
                title:'登陆失败',
                content:res.data.msg,
                ok:'确定'
            });
        }
    })
}
}
}
</script>

<style scoped>
.login_body{width:100%;}
.login_body .usercontainer{position: relative;}
.login_body .login_text{width:100%;height:40px;border:none;border-bottom: 1px solid #ccc;margin-bottom: 5px;outline: none;}
.login_body .login_btn{width:100%;height:50px;padding:10px;}
.verifybtn{position: absolute;right:10px;top:10px;height:40px;}
.login_body .login_btn input{width: 100%;height:50px;background: #e54847 ;border-radius: 3px;border:none;display:block;color:#fff;}
.login_body .login_link{display:flex;flex-flow:row nowrap;justify-content: space-between;}
.login_body .login_link a{text-align: center;text-decoration: none;margin:0 5px;font-size: 12px;color: #e54847;}
</style>
