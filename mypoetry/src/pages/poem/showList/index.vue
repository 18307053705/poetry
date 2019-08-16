<template>
    <div id="poem">
        <div class="back" @click='backAction'>
            <i></i>
        </div>
        <!-- 大图 -->
        <div class="maxImg">
            <img 
            v-for="itme in imgList"
            v-show="isIndex===itme.id"
            :key="itme.id"
            :src="itme.url"
            @click="pushAction(itme)">
        </div>
        <!-- 小图 -->
        <div class='minImg'>
            <img 
            v-for="itme in minImgList"
            :key="itme.id"
            :src="itme.url"
            :class="isIndex === itme.id ? 'action' : ''"
            @click="IndexAction(itme.id)"
            >
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgList:[
                {id:1,url:'/images/poem/Poem_1_background.png'},
                {id:2,url:'/images/poem/Poem_2_background.png'},
                {id:3,url:'/images/poem/Poem_3_background.png'},
                {id:4,url:'/images/poem/Poem_4_background.png'},
                {id:5,url:'/images/poem/Poem_5_background.png'},
            ],
            minImgList:[
                {id:1,url:'/images/poem/Poem_2_picture1.png'},
                {id:2,url:'/images/poem/Poem_1_picture2.png'},
                {id:3,url:'/images/poem/Poem_1_picture3.png'},
                {id:4,url:'/images/poem/Poem_1_picture4.png'},
                {id:5,url:'/images/poem/Poem_1_picture5.png'},
            ],
            isIndex:1,
        }
    },
    methods:{
        backAction(){
            this.$router.go(-1);
        },
        IndexAction(id){
            this.isIndex = id;
        },
        pushAction(itme){
            this.$router.push('/poem/details');
        }
    }
}
</script>

<style lang="scss" scoped>
#poem{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    .back{
        position: absolute;
        top:10px;
        left: 14px;
        i{
            display: inline-block;
            width: 10px;
            height: 19px;
            background: url('/images/poem/Poem_1_return_icon.png');
            background-size: 100% 100%;
        }
    }
    .maxImg{
        width: 100%;
        height: 100%;
        overflow: hidden;
        white-space:nowrap;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .minImg{
        white-space:nowrap;
        width: 100%;
        position: absolute;
        bottom: 10px;
        img{
            width: 44px;
            height: 72px;
            margin: 0 9px;
        }
        .action{
            width: 55px;
            height: 90px;
        }
        img:first-child{
            margin-left: 60px;
        }
    }
}

</style>

