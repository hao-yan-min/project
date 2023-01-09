<template>
  <el-container>
    <el-aside  style="background-color:whitesmoke" width="400px">
    <nabar></nabar>
    </el-aside>
  <el-container>

 
   <el-header>
    <el-avatar src="../img/1668897179_FZ-v1EXVEAAclgR.jpg" fit="fill"></el-avatar>
    
   </el-header>
   <el-main>
    main
   </el-main>
</el-container>
  </el-container>
</template>

<script>
import nabar from '@/components/bar.vue' 
import Bmob from 'hydrogen-js-sdk'
export default {
    methods:{
     created()
     {
        const query=Bmob.Query('test');
        query.get('f64d30eace').then(res=>{
            console.log(res.img);
            

        }).catch(err=>{
            console.log(err)
        })
     }
    },
components:{
    nabar
},
mounted(){
    this.created()
},
data(){
    return{imgsrc:''}
}
}
</script>

<style>
.el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }
    
    .el-aside {
      color: #333;
    }
</style>