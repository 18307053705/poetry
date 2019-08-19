<template>
    <div class="pagetop detail">
        <teaHeader left="true" right="right" title="老树逢春生嫩芽"/>
        <app-scroll class="scrollwarp">
        <detail-text/>
        </app-scroll>
    </div>
</template>

<script>
import Header from '../../commens/header'
import Detail from './DetailChildren/detailText'
import AppScroll from '../../../../components/AppScroll'
export default {
    components:{
        [Header.name]:Header,
        [Detail.name]:Detail,
        [AppScroll.name]:AppScroll,
    }
}
</script>

<style lang="scss" scoped>
.detail{
    bottom: 0;
    background:rgba(255,253,249,1);
    z-index:2;
    .scrollwarp{
        position: absolute;
        width:100%;
        top:44px;
        bottom:49px;
        left:0;
    }
}
</style>