<template>
<div>
    <headernav-itme :list="navlist" :pathSess='"poetry"'></headernav-itme>
    <router-view class="page"></router-view>
</div>
    
</template>

<script>
import headernav from '../../components/headernav';
export default {
    components:{
        [headernav.name]:headernav,
    },
    data:function(){
        return {
            navlist:[
                {id:1,value:'一杯',path:'/poetry'},
                {id:2,value:'清酒',path:'/poetry/sake'},
                {id:3,value:'与君酌',path:'/poetry/gentlemen'},
            ],
        }
    },
    beforeRouteLeave (to, from, next) {
        sessionStorage.setItem('poetry', '/poetry');
        next()
  }
}
</script>

<style>

</style>
