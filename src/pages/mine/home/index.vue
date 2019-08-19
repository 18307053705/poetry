<template>
    <div id="mien">
        <div class="user">
            <img src="/images/mien/Mine_user01.png" alt="">
            <h3>花非花</h3>
            <p><span>粉丝:12</span>|<span>关注:24</span></p>
        </div>
        <ul>
            <li
            v-for="itme in navlist"
            :key='itme.id'
            @click="pathAction(itme.path)"
            >
            <img :src="itme.url" alt="">
            <span>{{  itme.value }}</span>
            <i></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            navlist:[
                {id:1,url:'/images/mien/Mine_collection.png',value:'我的收藏',path:'/mine/collect'},
                {id:2,url:'/images/mien/Mine_news_icon.png',value:'我的消息',path:'/mine/message'},
                {id:3,url:'/images/mien/Mine_topic_icon.png',value:'我的话题',path:'/mine/topic'},
                {id:4,url:'/images/mien/Mine_house_icon.png',value:'我的小舍',path:'/mine/hutch'},
                {id:5,url:'/images/mien/Mine_poem_icon.png',value:'我的诗集',path:'/mine/poems'},
                {id:6,url:'/images/mien/Mine_set up_icon.png',value:'系统设置',path:'/mine/settings'},
                {id:7,url:'/images/mien/Mine_moon_icon.png',value:'夜间模式',path:'/mine/nighttime'},
            ],
        }
    },
    methods:{
        pathAction(path){
            this.$router.push(path);
        }
    }
}
</script>

<style lang="scss" scoped>
#mien{
    background:url('/images/mien/Mine_banner.png') no-repeat;
    background-size: 100%;
    .user{
        margin: 69px 40px 0;
        background:url('/images/mien/Mine_box.png') no-repeat;
        background-size: 100% 140%;
        background-position: center;
        text-align: center;
        img{
            width: 40px;
            height: 40px;;
        }
        h3{
            font-size: 20px;
        }
        span{
            font-size: 12px;
            color: #666;
            display: inline-block;
            margin: 0 20px;
            padding-bottom: 10px;
        }
    }
    
}

ul{
    padding: 0 34px;
    li{
        position: relative;
        line-height: 54px;
        border-bottom: 1px solid #F8E9CE;
        img{
            width: 18px;
            height: 18px;
            margin-right: 18px;
        }
        span{
            font-size: 14px;
        }
        i{
            position: absolute;
            top:50%;
            right: 0;
            transform: translateY(-50%);
            width: 18px;
            height: 18px;
            background: url('/images/mien/Mine_more.png') no-repeat;
            background-size: 100% 100%;
        }
    }
    li:first-child{
        border-bottom: 1px dashed #333;
    }
}

</style>

