<template>
  <el-container>
    <el-header height="200px" style="background-color:rgb(174,221,129)">
        
            
                <el-avatar alt="头像" shape="circle" :size="120" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="position:absolute; top:10px;left:10px"></el-avatar>   
           <h3 style="position:absolute; top:0px;left:140px;">伤心太平洋</h3>
           <div style="position:absolute;top:40px;left:140px">个性签名</div>
            <el-input  v-model="value" style="position:absolute; width:380px;left:15px;top: 150px"><el-button  slot="append" @click="submit">搜索</el-button></el-input>
            
            
           
    </el-header>
    <el-main style="background-color:rgb(174,221,129)">
    
        <el-row style="height:50px;background-color: aliceblue;margin-bottom: 20px;" type="flex">
        <el-col :span="4">
            <el-avatar alt="头像" shape="circle"  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="position:relative;top:-40px;left: -5px;"></el-avatar>
        </el-col>
        <el-col :span="12">
        <div style="height:100%;line-height: 20px;float: left;"><b>{{nickname}}</b>
        <br>{{content}}
        </div>
        </el-col>
        <el-col :offset="4" :span="4">
            <el-button type="success" :plain="plain" icon="el-icon-check" circle style="position:relative;top:-55px" @click="changeplain"></el-button>
        </el-col>     
    </el-row>
    <el-row style="height:50px;background-color: aliceblue;margin-bottom: 20px;" type="flex">
        <el-col :span="4">
            <el-avatar alt="头像" shape="circle"  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="position:relative;top:-40px;left: -5px;"></el-avatar>
        </el-col>
        <el-col :span="12">
        <div style="height:100%;line-height: 20px;float: left;"><b>{{nickname}}</b>
        <br>{{content}}
        </div>
        </el-col>
        <el-col :offset="4" :span="4">
            <el-button type="success" :plain="plain" icon="el-icon-check" circle style="position:relative;top:-55px" @click="changeplain"></el-button>
        </el-col>     
    </el-row>
    
    </el-main >
  </el-container>
</template>

<script>

export default {
data(){
    return{
        value:'',
        nickname:'老王',
        content:"好好上课",
        plain:true
    }
},
methods:{
    submit(e)
    {
        alert("搜索")
    },
    changeplain()
    { 
       this.plain=false
    }
},
components:{
    
}
}
</script>

<style>

</style>