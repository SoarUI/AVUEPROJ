<template>
    <div class="_body">
    <Loading v-if="isLoading" />
    <Scroller v-else>
    <ul>
        <li>
            <div class="pic_show"><img src="images/movie_1.png"></div>
            <div class="info_list">
                <h2>无名之辈</h2>
                <p>观众评<span class="grade">9.2</span></p>
                <p>运营商:深圳乐瞬科技有限公司</p>
                <div class="info">这款游戏总体来说，还是值得各位期待的，精美的画面和流畅的场景，是大众娱乐的一大风景！</div>

            </div>
            <div class="btn_mall">
                去玩玩
            </div>
        </li>
    </ul>
</Scroller>

</div>
</template>

<script>
export default {
name:'AppStragies',
data(){
    return{
        isLoading:true
    }
},
mounted(){
     setTimeout(() => {
                        this.isLoading = false;
                    }, 1000);
}
}
</script>

<style scoped>
#Content ._body{flex:1;overflow: auto;}
._body ul{margin:0 12px;overflow:hidden;}
._body ul li{margin-top:12px;display: flex;align-items: center;border-bottom: 1px #e6e6e6 solid;padding-bottom: 10px;}
._body.pic_show{width:64px;height:90px;}
._body.pic_show img{width:100%;}
._body .info_list{margin-left: 10px;flex:1;position: relative;}
._body .info_list h2{font-size: 17px;line-height: 24px;width: 150px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
._body .info_list p{font-size: 13px;color: #666;line-height: 22px;width: 200px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;}
._body .info_list .info{font-size: 13px;color: #666;line-height: 22px;width: 200px;;white-space:normal;text-overflow:ellipsis;}
._body .info_list .grade{font-size: 15px;font-weight: 700;color: #faaf00;}
._body .btn_mall,._body .btn_pre{width:47px;height:27px;line-height: 28px;text-align: center;background-color: #e6e6e6;}
._body .btn_pre{background-color: #3c9fe6;}
</style>
