<template>
    <div class="tea_header">
        <div class="box">
        <div 
        @click="goBack"
        class="left_header iconfont icon-fanhui" v-if="left"></div>
        <div class="title_header">{{title}}</div>
        </div>
        <div class="right_header iconfont icon-iconfontfenxiang" v-if="right"></div>

    </div>
</template>

<script>
export default {
    name:'teaHeader',
    props:['title','left','right'],
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" >
.tea_header{
    height:44px;
    line-height:44px;
    background:rgba(255,253,249,1);
    box-shadow:0px 2px 20px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    padding: 0  16px;
    .box{
        display:flex;
    }
    .title_header{
        font-size:14px;
        color:#333;
    }
    .right_header{
        color:#999;
    }
}
</style>