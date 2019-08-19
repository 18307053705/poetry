<template>
    <div id='gentlemen'>
        <app-scroll class="gentSroll">
            <div v-for="(item,index) in list" :key="index" class="listShow" >
                <!-- 头部用户信息 -->
                <div class="head">
                    <img :src="item.imgUrl" alt="">
                    <span>{{item.time}}</span>
                    <p>{{item.user}}</p>
                </div>
                <!-- 用户发布的内容 -->
                <div class="text">
                    {{item.text}}
                </div>
                <!-- 来源 -->
                <div class="source">
                    {{item.source}}
                </div>
                <!-- 点赞，评论，转发 -->
                <div class="love_remark_intr">
                    <div class="love">
                        <img :src="item.love.url" alt="">
                        <span>{{item.love.num}}</span>
                    </div>
                    <div class="remark">
                        <img :src="item.remark.url" alt="">
                        <span>{{item.remark.num}}</span>
                    </div>
                    <div class="intransit">
                        <img :src="item.intransit.url" alt="">
                        <span>{{item.intransit.num}}</span>
                    </div>
                </div>
            </div>
        </app-scroll>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:new Array(30).fill(
                {
                    imgUrl:'/images/poetry/Poem_comments_user01.png',
                    user:'书忆磬',
                    time:'刚刚',
                    text:'太难背了！！！！,呜呜呜',
                    source:'来自《山中》',
                    love:{url:'/images/poetry/Poem_comments_like_icon.png',num:100},
                    remark:{url:'/images/poetry/Poem_comments_comments_icon.png',num:100},
                    intransit:{url:'/images/poetry/Poem_comments_forward_icon.png',num:100},
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
#gentlemen{
    padding: 0 16px;
    box-sizing: border-box;
    .gentSroll{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .listShow{
        padding: 13px 0;
        border-bottom: 1px solid #F8E9CE;
        .head{
            height: 34px;
            position: relative;
        
            img{
                position: absolute;
                width: 34px;
                height: 34px;
            }
            span{
                position: absolute;
                right: 0;
                top:12px;
                font-size: 10px;
                color: #999;
            }
            p{
                line-height: 34px;
                padding-left: 44px;
                font-size: 14px;
            } 
        }
        .text,.source{
            margin-left: 44px;
            margin-right: 10px;
            font-size: 12px;
            color: #999;
            line-height: 30px;
        }
        .source{
            color: #F0CB89;
            font-size: 10px;
        }
        .love_remark_intr{
            font-size: 10px;
            color: #999;
            text-align: right;
            overflow: hidden;
            div{
                display: inline-block;
                margin-left: 16px;
                img{
                    width: 16px;
                    height: 16px;
                }
                span{
                    display: inline-block;
                    height: 16px;
                    vertical-align: top;
                    line-height: 16px;
                }
            }
            
        }
    }
    .listShow:first-child{
        border-bottom: 1px dashed #333;
    }
    
}
</style>
