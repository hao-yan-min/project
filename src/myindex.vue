<template>
<div>
    <el-row>
        <el-col :span="5" :offset='1'>
            <el-input v-model='nm' placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
            <el-input v-model='date' placeholder="请输入日期"></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
            <el-input v-model='address' placeholder="请输入地址"></el-input>
        </el-col>
        <el-col :span="5" :offset='1'>
            <el-button type="success"  @click="sendmessage">发送</el-button>

        </el-col>
    </el-row>
    &nbsp;
    <lis :lists="mylists"></lis>
</div>

  
</template>

<script>
import Bmob from "hydrogen-js-sdk";
import lis from '@/components/elementlist.vue'
// Bmob.initialize('6f6f8c9c5729628b','123456');
// Bmob.Query('test').get('Sj5WMMMq').then(res=>{
//    console.log(res);
// }).catch(err=>{console.log(err)})
export default {
    data(){
        return{
            nm:'',
            address:'',
            date:'',
            input:{},
            mylists:[]
        }
    },
    methods:{
        sendmessage()
        {
          this.input.name=this.nm;
          this.input.date=this.date;
          this.input.address=this.address;
          this.mylists.push(this.input);
          console.log(this.input);
            const query=Bmob.Query('test');
            query.set('name',this.input.name);
            query.set('address',this.input.address);
            query.set('date',this.input.date);
            query.save().then(res=>{
                console.log(res)
            }).catch(err=>{console.log(err)})
        }
    },
    components:{
      lis
    }

}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>