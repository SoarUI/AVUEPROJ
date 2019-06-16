<template>
   <div class="login_body">
    <Header />
    <router-view/>
    <TabBar />
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
}
}
</script>

<style scoped>
</style>
