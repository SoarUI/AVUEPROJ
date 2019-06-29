<template>
    <div class="login_body">
    <div class="usercontainer">
    邮箱:<input type="text" v-model="email" class="login_text"><button class="verifybtn"  @touchstart="handleToSendverify">{{verifycodestring}}</button>
    </div>
    <div>
        用户名：<input type="text" v-model="username" class="login_text">
    </div>
    <div>
        密码：<input type="password" v-model="password" class="login_text">
    </div>
    <div>
        确认密码：<input type="text" class="login_text">
    </div>
    <div>
        验证码：<input type="text" v-model="verify" class="login_text">
    </div>
    <div class="login_btn">
       <button class="login_btn1" @touchstart="handleToRegister">注册</button>
    </div>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
name : 'Register',
data(){
    return{
        username:'',
        password:'',
        verify:'',
        email:'',
        verifycodestring:'发送验证码',
        DisableVerifybtn:false,
    }
},
methods:{
    handleToSendverify(){
        if(this.email==="" || this.DisableVerifybtn){
            return;
        }
       this.axios.post('/api/user/verify',{
           email:this.email
       })
       .then((res)=>{
           var status =res.data.status;
           if(status ===0)
        {
            var count =60;
            var timer=setInterval(()=>{
                this.DisableVerifybtn = true;
                this.verifycodestring='剩下:'+count +'秒';
                if(count--==0){
                    this.DisableVerifybtn=false;
                    count=60;
                    this.verifycodestring="发送验证码";
                    clearTimeout(timer._id);
                }
            },1000);
            this.$mybox({
                title:'验证码',
                content:res.data.msg+res.data.status,
                ok:'确定'
            });
           
        }
        else{
            //
            this.$mybox({
                title:'验证码',
                content:res.data.msg+res.data.status,
                ok:'确定'
            });
        }
       })
    },
    handleToRegister(){
         this.axios.post('/api/user/register',{
             username:this.username,
             password:this.password,
             email:this.email,
             verify:this.verify
         })
       .then((res)=>{
           var status =res.data.status;
           if(status ===0)
        {
            var that = this;
            this.$mybox({
                title:'注册',
                content:res.data.msg+res.data.status,
                ok:'确定',
                handleok(){
                    that.$router.push('/Mine/login');
                }
            });
           
        }
        else{
            //
            this.$mybox({
                title:'注册',
                content:res.data.msg+res.data.status,
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
.login_body .login_btn .login_btn1{width: 100%;height:50px;background: #e54847 ;border-radius: 3px;border:none;display:block;color:#fff;}
.login_body .login_link{display:flex;flex-flow:row nowrap;justify-content: space-between;}
.login_body .login_link a{text-align: center;text-decoration: none;margin:0 5px;font-size: 12px;color: #e54847;}
.verifybtn{position: absolute;right:10px;top:10px;height:40px;}
</style>
