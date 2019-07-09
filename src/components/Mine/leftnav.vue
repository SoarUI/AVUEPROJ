<template>
   
</template>

<script>
export default {
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
                   that.$store.commit('login/LOGININFO',
            {clientToken:'',
            icon:'',
            userId:-1,
            isAdmin:false
            });
            
                  that.$router.push('/Mine/Login');
               }
            });
         }
      })
   },
}
}
</script>

<style scoped>
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
.router-link-active{
    border-right: 1px solid #20a0ff;
     border-bottom: 1px solid #20a0ff;
}
</style>
