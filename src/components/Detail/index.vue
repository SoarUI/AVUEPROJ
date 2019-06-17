<template>
    <div class="detailcontainer" >
        <Header title="详情页">
            <i class="iconfont icon-right" @touchstart="handleToback">&lt;</i>
        </Header>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
name:'Detail',
props:['Id'],
components:{
    Header
},
methods:{
    handleToback:function(){
        this.$router.back();
    }
}
}
</script>

<style scoped>
#main .detailcontainer{position:absolute;left:0;top:0;width: 100%;min-height:100%;z-index: 100;}
</style>
