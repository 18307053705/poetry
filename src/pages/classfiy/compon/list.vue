<template>
    <app-scroll  class="listShouw">
            <li v-for="(itme,index) in list"
                :key="index"
                @click="pushAction(itme.value)"
            >
            {{itme.value}}
            </li>
     </app-scroll>
</template>

<script>
export default {
    name:'list-itme',
    props:['list'],
    methods:{
        pushAction(value){
            this.$store.commit('Classfiy/setValue',value)
            this.$router.push('/classify/details');
        }
    }
}
</script>

<style lang="scss" scoped>
.listShouw{
    width: 100%;
    height: 100%;
    li{
        margin-left: 17px;
        font-size: 15px;
        height: 35px;
        line-height: 35px;
        font-weight: bold;
        border-bottom: 1px solid #F8E9CE;
    }
    
}
</style>