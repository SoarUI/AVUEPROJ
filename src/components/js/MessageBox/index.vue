<template>
    <div class="msgbox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
    <div >
        <div @touchstart="handlecancel" >{{cancel}}</div>
        <div @touchstart="handleok" >{{ok}}</div>
    </div>
    </div>
</template>

<script>
export default {
name:'MessageBox'
}
</script>

<style scoped>
.msgbox{width:200px;height:140px;border:1px #ccc solid;border-radius: 4px;background: #fff;box-shadow: 3px 3px 3px 3px #fff;position: absolute;left:50%;top:50%;margin: -70px 0 0 -100px;}
.msgbox h2{text-align: center; line-height: 40px;font-size: 18px;}
.msgbox p{text-align: center;line-height: 40px;}
.msgbox >div{display: flex;position: absolute;bottom: 0;width: 100%;border-top:1px #ccc solid;}
.msgbox >div div{flex:1;text-align: center;line-height: 40px;border-right:1px #ccc solid;}
.msgbox >div div:last-child{border:none;}
</style>
