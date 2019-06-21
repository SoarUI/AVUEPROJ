<template>
    <div class="msgbox">
        <h2>{{title}}</h2>
        <div class="msgcontent">{{content}}</div>
    <div class="msg_btn_group">
        <div class="msg_btn " v-if="cancel" @touchstart="handlecancel" >{{cancel}}</div>
        <div class="msg_btn msg_btn_end" v-if="ok" @touchstart="handleok" >{{ok}}</div>
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
.msgbox .msgcontent{text-align: center;line-height: 24px;white-space: normal;clear:both;width:100%;}
.msgbox .msg_btn_group{display: flex;position: absolute;bottom: 0;width: 100%;border-top:1px #ccc solid;}
.msg_btn_group .msg_btn{flex:1;text-align: center;line-height: 40px;border-right:1px #ccc solid;}
.msg_btn_group .msg_btn_end{border:none;}
</style>
