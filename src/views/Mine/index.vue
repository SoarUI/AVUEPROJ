<template>
   <div class="login_body">
    <Header title="个人中心">
       <i class="iconfont icon-fanhui1" @touchstart="handleToback"></i>
    </Header>
    <router-view/>
   </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
name:'Mine',
components:{
Header,
TabBar
},
methods:{
   handleToback:function(){
        this.$router.replace({path:'/'});
    }
}
}
</script>

<style scoped>
.login_body{
    width:100%;
    height:100%;
 }
</style>
