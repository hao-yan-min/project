<template>
    <div>
        <h1 class="myclass" id="1">测试标题--{{ msg }}</h1>
        <el-button type="primary" plain @click="changecolor">test</el-button>
       <lis></lis>
       
    </div>
        
    
</template>
<style>
.myclass{
    background-color: rgb(100, 200, 70);
}
</style>
<script>
import lis from '@/components/elementlist.vue'
export default {
    data(){
        return{
            msg:"hello"
        }
    },
    
    methods:{
     changecolor(e)
     {
       console.log(e);
       
       //e.target.className='';
       //e.target.style.backgroundColor="red";
       var te=document.getElementById('1')
       te.style.backgroundColor='red';
     }
    },
    components:{
        lis
    }

}
</script>