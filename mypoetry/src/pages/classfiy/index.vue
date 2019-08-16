<template>
    <div class="classify">
        <navTitle title="筛选" :leftItme='1' class="navtitle"/>
        <div class="nav">
            <div class="nav_item">
                <router-link v-for="itme in classifyPath" :key="itme.id" :to="itme.path">
                    {{ itme.value }}
                </router-link>
            </div>
        </div>
        <router-view class="classColor page"></router-view>
    </div>
</template>

<script>
import Nav from '../../components/headertitle';
export default {
    name:'headernav-itme',
    components:{
        [Nav.name]:Nav,
    },
    data:function(){
        return {
            classifyPath :[
                {id:1,value:'朝代',path:'/classify'},
                {id:2,value:'作者',path:'/classify/author'},
                {id:3,value:'分类',path:'/classify/genre'}
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.classify{
    height: 100%;
    .classColor{
        top:115px;
        padding:0 10px;
    }
    .navtitle{
        padding: 0 10px;
        box-sizing: border-box;
        
    }
    .nav{
        width: 100%;
        height: 75px;
        background: #FFFDF9;
        .nav_item{
            width: 50%;
            height: 75px;
            display: flex;
            a{
                text-align: center;
                flex: 1;
                color: #999;
                font-size: 15px;
                height: 75px;
                line-height: 75px;
            }
            a.router-link-exact-active{
                color: #333333;
                font-size: 18px;
                background: url('/images/component/navigation bar_line.png') no-repeat;
                background-size: 30px 2px;
                background-position: center 68px;
            }
        }
        
    }
}

    
</style>