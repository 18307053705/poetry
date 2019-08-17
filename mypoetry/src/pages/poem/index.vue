<template>
    <div>
        <div class="poem-head">题诗</div>
        <router-view class="page"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.poem-head{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 44px;
    background: #eee;
    line-height: 44px;
    text-align: center;
}
</style>

