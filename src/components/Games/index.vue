<template>
   <div id="main">
       <Header title="游戏分享"/>
       <div id="Content">
           <ul class="Game_Menu">
                <router-link tag="li" class="App_Name" to="/NewGames/AppGame">
                    <span>手机游戏</span>
                </router-link>
                <router-link tag="li" class="Web_Game" to="/NewGames/WebGame">
                    <span>网页游戏</span>
                </router-link>
                <router-link tag="li" class="PC_Game" to="/NewGames/PCGame">
                    <span>PC游戏</span>
                </router-link>
           </ul>
        </div>
       <router-view />
       <TabBar />
   </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
name:'Games',
components:{
Header,
TabBar
}
}
</script>

<style scoped>

</style>
