<template>
    <div class="scrollerWrapper" ref="scrollerWrapper">
        <slot></slot>
    </div>
</template>


<script>
import BScroll from 'better-scroll';
export default {
name:'Scroller',
props:{
    handleToScroll:{
        type:Function,
        default:function(){}
    },
    handleToTouchEnd:{
        type:Function,
        default:function(){}
    }
},
mounted(){
    var scroll = new BScroll(this.$refs.scrollerWrapper,{
        tap:true,
        probeType:1
    });
    //注册滚动事件
    scroll.on('scroll',(pos)=>{
        this.handleToScroll(pos);
    });
    //注册松开事件
    scroll.on('touchEnd',(pos)=>{
        this.handleToTouchEnd(pos);
    });
    //点击事件
}
}
</script>


<style>
.scrollerWrapper{height:100%;float:left;}
</style>
