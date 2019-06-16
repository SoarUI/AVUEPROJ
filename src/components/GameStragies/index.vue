<template>
   <div id="main">
       <Header title="游戏攻略分享"/>
       <div id="Content">
           <ul class="Game_Menu">
                <router-link tag="li" class="App_Name" to="/GameStragies/AppStragies">
                    <span>手机游戏</span>
                </router-link>
                <router-link tag="li" class="Web_Game" to="/GameStragies/WebStragies">
                    <span>网页游戏</span>
                </router-link>
                <router-link tag="li" class="PC_Game" to="/GameStragies/PCStragies">
                    <span>PC游戏</span>
                </router-link>
           </ul>
       
       <router-view />
        </div>
       <TabBar />
   </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
name:'GameStragies',
components:{
Header,
TabBar
}
}
</script>

<style>

</style>
