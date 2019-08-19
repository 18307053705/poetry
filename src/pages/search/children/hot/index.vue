<template>
    <div class="hot">
        <h3>热门</h3>
        <ul>
            <li
            v-for="(item,index) in list"
            :key="index"
            :class='(index+1) % 4 === 0 && "action"'
            @click="searchAction(item.value)"
            >
            {{item.value}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            list:new Array(9).fill({value:'李白'})
        }
    },
    methods:{
        searchAction(value){
            this.$emit('earchWach',value)
        }
    }
}
</script>

<style lang="scss" scoped>
.hot{
    padding:0 36px;
    h3{
        font-size: 12px;
        color: #999;
        height: 14px;
        line-height: 14px;
    }
    ul{
        margin-top: 12px;
        overflow: hidden;
        li{
            float: left;
            padding: 5px 18px;
            background: #fff;
            margin-right: 10px;
            margin-bottom: 10px;
            font-size: 12px;
            border-radius: 15px;
            border: 1px solid #E6E6E6;
        }
        li.action{
            margin-right: 0;
        }
    }
}

</style>