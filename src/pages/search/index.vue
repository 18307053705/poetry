<template>
    <div id='search'>
        <!-- 导航图 -->
        <div class="banner">
            <img src="/images/search/Search_banner01.png" alt="">
            <i class="icon" @click="pushAction"></i>
        </div>
        <!-- 搜索框 -->
        <div class="keyword">
            <span class="icon"></span>
            <input type="text" placeholder="请输入关键字" v-model="Value">
            <span class="btnSearch" @click="searchAction">搜索</span>
        </div>
        <!-- 热门搜索 -->
        <Hot v-show="isShow" @earchWach='changeAction' />
        <!-- 搜索结果 -->
        <app-scroll v-show="!isShow" class="listShouw">
            <ListShow  :list='list' />
        </app-scroll>
    </div>
</template>

<script>
import Hot from './children/hot';
import ListShow from './children/listShow';
export default {
    components:{
        Hot,
        ListShow
    },
    data(){
        return {
            isShow:true,
            Value:'',
            list:new Array(30).fill({title:'登太白峰',author:'李白',text:'西上太白峰，夕阳穷登攀。太白与我语,为我开天关。'}),
        }
    },
    methods:{
        //返回
        pushAction(){
            this.$router.go(-1);
        },
        //点击搜索事件
        searchAction(){
            this.isShow = false;
        },
        //监听热门点击
        changeAction(Value){
            console.log(Value);
            this.isShow = false;
        }

    }
}
</script>


<style lang="scss" scoped>
#search{
    background: #FFFDF9;
    .banner{
        height: 150px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .icon{
            display: inline-block;
            width: 17px;
            height: 17px;
            position: absolute;
            top:54px;
            left: 16px;
            background: url('/images/search/Search_return_icon.png') no-repeat;
            background-size: 100%;
        }
    }
    .keyword{
        width: 343px;
        margin: 1px auto;
        box-sizing: border-box;
        padding:0 34px;
        background: url('/images/search/Search_box.png') no-repeat;
        background-size: 100% 100%;
        height: 75px;
        line-height: 75px; 
        vertical-align: middle;  
        .icon{
            width: 16px;
            height: 16px;
            display: inline-block;
            background: url('/images/search/Search_search_icon.png') no-repeat;
            background-size: 100% 100%;
            margin-right: 10px;
            position: relative;
            top:3px;
        }
        input{
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            color: #D2D2D2;
            border: none;
            background-color: transparent;
            border: none;
            outline: none;
        }
        .btnSearch{
            color:#F0CB89;
            font-size: 12px;
            height: 20px;
            float: right;
        }
        .btnSearch::before{
            content:'';
            width:1px;
            height: 20px;
            border-right: 1px dashed #ccc;
            margin-right: 10px;
        }
        
    }
    .listShouw{
        position:fixed;
        top:225px;
        left: 36px;
        bottom: 0;
        right: 36px;
    }
}
</style> 
