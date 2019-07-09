<template>
    <div>
      <p style="height:24px;margin-bottom:0px;">用户头像(点击下方上传): </p>
      <p class="Img-p"><input type="file" name="file" id="file" class="fileinput" @change="handleIconChange"/>
      <img :src="icon"  id="imgshow"/></p>
   </div>
</template>

<script>
export default {
data(){
   return {
      icon:''
   }
},
mounted(){
   this.icon =this.$store.state.login.icon;
},
methods:{
     handleIconChange(env){
      var file = env.target.files[0];
      var param = new FormData();
      console.log(file)
      param.append('file',file,file.name);
      var config={
         headers:{
            'Content-Type':'multipart/form-data'
         }
      };
      this.axios.post('/api/admin/upload',param,config).then((res)=>{
         var status =res.data.status;
         if(status ===0 ){
            var that =this;
            this.icon=res.data.icon;
            this.$store.commit('login/SET_ICON',{icon:res.data.icon});
            
            this.$message('头像上传成功')
         }
         else{
            this.$message('头像上传失败')
         }
      });
   }
}
}
</script>

<style scoped>
.Img-p{float:left;
         width:200px;
         height:200px;
         overflow:hidden;
         background-color:Green;
          margin-top:0px;
          position:relative;
    }
    p
    {
        height:45px;
        margin-top:1px;
    }
    .fileinput{
       opacity:0;
       width:200px;
       height:200px;
       position:absolute;
       top:0;
       left:0;
       border-radius:50%;


    }
</style>

