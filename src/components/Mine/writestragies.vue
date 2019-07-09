<template>
    <div class='body'>  
        <div>
            <p>标题:</p>
            <input type="text" class="input_title" v-model="title">
        </div>
        <div>
            <p>内容:</p>
            <textarea cols="5" rows=20 class ="input_content" v-model="data" />
        </div>
        <div>
            <button type="submit" class="input_btn" @touchstart="handleToSave">提交</button>
        </div>
    </div>
</template>

<script>
export default {
methods:{
    handleToSave(){
        this.axios.post('/api/stragies/postarticle',{title:this.title,
        content:this.data}).then((res)=>{
         var status =res.data.status;
         if(status ===0 ){
            this.$message('提交成功，请耐心等待审核...');
         }
         else{
             this.$message(res.data.msg);
         }
      });
    }
},
data(){
    return {
        title:'',
        data:''
    }
}
}
</script>

<style>
.main .body{
    float:left;
    width:80%;
    height:100%;
    color:coral;
}
.body .input_title{
    float:left;
    width:100%;
    height:24px;
    font-size: 14px;
    line-height: 18px;
}
.body .input_content{
    float:left;
    width:100%;
    font-size: 14px;
    line-height: 18px;
}
.input_btn{
    width:100px;
    line-height:40px;
    color:#fff;
    background-color: #e54847;
    font-size:24px;
    text-align:center;
}
</style>
