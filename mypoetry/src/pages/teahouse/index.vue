<template>
<div>
    <headernav-itme :list="navlist" :pathSess='"teahouse"'></headernav-itme>
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
                {id:1,value:'一盏',path:'/teahouse'},
                {id:2,value:'清茶',path:'/teahouse/tea'},
                {id:3,value:'与君饮',path:'/teahouse/drɪŋk'},
            ],
        }
    },
    beforeRouteLeave (to, from, next) {
        sessionStorage.setItem('teahouse', '/teahouse');
        next()
  }
}
</script>
