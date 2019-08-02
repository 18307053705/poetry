<template>
    <div id='app'>
        <router-view></router-view>
        <!-- 底部菜单 -->
        <footernav-itme></footernav-itme>
    </div>
</template>

<script>
import footernav from './components/footernav'
export default {
    components:{
        [footernav.name]:footernav
    }
}
</script>

<style>

</style>
