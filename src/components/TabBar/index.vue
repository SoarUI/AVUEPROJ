<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/NewGames">
                <i class="iconfont icon-zuixintaishifenxi"></i>
                <p>新游戏</p>
            </router-link>
            <router-link tag="li" to="/GameStragies">
                <i class="iconfont icon-gonglve"></i>
                <p>游戏攻略</p>
            </router-link>
            <router-link tag="li" to="/Games">
                <i class="iconfont icon-share"></i>
                <p>游戏集萃</p>
            </router-link>
             <router-link tag="li" to="/Mine">
                <i class="iconfont icon-View"></i>
                <p>个人中心</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
name:'TabBar'
}
</script>

<style scoped>
#footer{width:100%;height:50px;background:white;border-top:2px #ebe8e3 solid;position: fixed;left:0;bottom: 0; }
#footer ul{display: flex;text-align: center;height:50px;align-items: center;justify-content: space-between;}
#foooter ul li{flex: 1; height: 40px;}
#footer ul li.active{color: #f03d37;}
#footer ul li.router-link-active{color:#f03d37;}
#footer ul li i{font-size: 20px; }
#footer ul p{font-size: 20px;line-height: 18px;}
</style>
