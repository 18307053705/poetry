<template>
    <div id='poemDetails'>
        <!-- 头部标题 -->
        <HeadTitle/>
        <!-- 诗词内容 -->
        <Contexts :data='data'/>
        <!-- 经典名句 -->
        <List :data='list' />
    </div>
</template>

<script>
import HeadTitle from './children/headTitle';
import Contexts from './children/context';
import List from './children/list';
export default {
    components:{
        HeadTitle,
        Contexts,
        List
    },
    data(){
        return {
            data:{title:'离思五首',text:['曾经沧海难为水，','除却巫山不是云。','取次花丛懒回顾，','半缘修道半缘君。']},
            list:new Array(30).fill({title:'江城子·乙卯正月二十日夜记梦',text:'十年生死两茫茫，不思量，自难忘。'})
        }
    }
}
</script>

<style lang="scss" scoped>

#poemDetails{
    background: #FCFAF6;
    padding: 0 16px;
}
</style>