<template>
   <div id="main">
       <Header title="游戏分享网"/>
       <TabBar />
   </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
name:'Home',
data(){
    return {msg:"hello world!"}
},
components:{
Header,
TabBar
}
}
</script>

<style>

</style>

