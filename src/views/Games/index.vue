<template>
   <div id="main">
       <Header title="游戏集萃"/>
       <div id="content">
           <ul class="Game_Menu">
                <router-link tag="li" class="App_Name" to="/Games/AppGames ">
                    <span>手机游戏</span>
                </router-link>
                <router-link tag="li" class="Web_Game" to="/Games/WebGames">
                    <span>网页游戏</span>
                </router-link>
                <router-link tag="li" class="PC_Game" to="/Games/PCGames">
                    <span>PC游戏</span>
                </router-link>
           </ul>
           <router-view />
        </div>
         <router-view name="Detail" />
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
#content ul.Game_Menu{width:100%;height:45px;border-bottom: 1px solid #e6e6e6;display:flex;justify-content: space-between;}
.Game_Menu li{ flex:1; margin-left:20px;height: 100%;line-height: 45px;Color: #1f1c1c;}
.Game_Menu li.router-link-active{color: #ef4238;border-bottom: 2px #ef4238 solid;}
</style>
