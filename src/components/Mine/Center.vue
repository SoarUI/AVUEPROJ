<template>
   <div> 个人中心:{{$store.state.login.username}}</div>
   
</template>

<script>
import {messagebox} from '@/components/js'
export default {
name : 'personal_center',
mounted()
{
   messagebox({
      title:'jkjkjhkh',
      content:'jhkahkhalf',
      cancel:'quxiao',
      ok:'llajla'
   });
}
}
</script>

<style>

</style>
