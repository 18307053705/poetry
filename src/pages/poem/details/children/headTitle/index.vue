<template>
    <div class="title">
        <div class="back" @click="pathAction"><i></i><span>题诗</span></div>
        <div class="finish">
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        pathAction(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        background: #FFFDF9;
        .back{
            i{
                display: inline-block;
                width: 6px;
                height: 11px;
                background: url('/images/poem/Poem_1_return_icon.png') no-repeat;
                background-size: 100%;
                margin-right: 16px;
            }
            span{
                font-size: 15px;
                color: #333;
                font-weight: bold;
            }
        }
        .finish{
            span{
                display: inline-block;
                width: 29px;
                height: 15px;
                background: url('/images/poem/poem_1_1_complete.png') no-repeat;
                background-size: 100%;
            }  
        }
    }
</style>