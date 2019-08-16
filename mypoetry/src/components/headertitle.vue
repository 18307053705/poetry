<template>

    <div class="navigation  border-bottom" @click='goAction'>
        <p>
            <span v-if="leftItme"></span>
            <i>{{title}}</i>
        </p>
     
    </div>
    
</template>

<script>
export default {
    name:'navTitle',
    props:['title','leftItme'],
    methods:{
        goAction(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>

.navigation{
   width: 100%;
   line-height: 44px;
   height: 44px;
   background:#FFFDF9;
   span{
        display: inline-block;
        width:12px;
        height:12px;
        background: url('/images/classify/Category_return_icon.png') no-repeat;
        background-size: 100%;
        margin-right: 10px;
   }
}


</style>

