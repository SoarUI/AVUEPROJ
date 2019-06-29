<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="注册时间"
      prop="date">
    </el-table-column>
    <el-table-column
      label="用户名"
      prop="username">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleFreeze(scope.$index, scope.row)">
          {{scope.row.isfreeze?"已冻结":"未冻结"}}
          </el-button>
           <el-button
          size="mini"
          @click="handleResetPassword(scope.$index, scope.row)">
          密码重置
          </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios';
export default {
name : 'usermodule',
mounted()
{
    axios.post('/api/admin/getuserlist').then((res)=>{
       var status = res.data.status;
       if(status === 0){
          this.tableData =res.data.data.userlist;
       }else{
          this.$message("获取用户列表失败");
       }
    })
},
 data() {
      return {
        tableData:[],
        search: ''
      }
  },
methods:{
   handleFreeze(index, row) {
        console.log(index, row);
        axios.post('/api/admin/freeze',{
           email:row.email,
           isfreeze:!row.isfreeze
        })
        .then((res)=>{
           var status= res.data.status;
            if(status === 0){
              this.$message("操作成功");
            }else{
               this.$message("操作失败");
            }
        })

      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleResetPassword(index, row){

      }
}
}
</script>

<style scoped>

</style>
