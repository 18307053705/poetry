<template>
    <div class="wrap">
        <div class="top">
            <div class="left">
                <div class="img">
                    <img src="../../../../../../public/images/z_teahose/Tea house_picture1.png" alt="">
                </div>
                <div class="user">
                    <p>曹孟德</p>
                    <span>2019-08-02</span>
                    <span>19:18</span>
                </div>
            </div>
            <p class="follow"><img src='../../../../../../public/images/z_teahose/a trip_attention.png' alt=""></p>
        </div>
        <div class="text">老树不惧风暴,立在路旁,虽然树皮开裂,依然顽强得生长,烈日炎炎时甘愿为人们遮阴,送去清凉,请诸位诗友们以“老树逢春生嫩叶”作诗、词、楹联,文体形式不限,歌颂它顽强的生命力,以及崇高的品德。</div>
        <div class="browser">
            <span>浏览: 840</span>
            <span>回帖: 3</span>
        </div>
        <!-- 评论区域 -->
        <div class="comment">
        <div class="top">
            <div class="left">
                <div class="img">
                    <img src="../../../../../../public/images/z_teahose/Tea house_picture1.png" alt="">
                </div>
                <div class="user">
                    <p>古人</p>
                    <span>2小时前</span>
                </div>
            </div>
        </div>
        <div class="text">头头是道，说的好</div>
        <div class="browser">
            <span>浏览: 840</span>
            <span>回帖: 3</span>
        </div>
</div>
    <!-- 评论结束 -->
    </div>
</template>

<script>
export default {
    name:'detail-text',
    data() {
        return {
        }
    },
    components:{
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.wrap{
  
    .browser{
        text-align: right;
        border-bottom:1px solid #F8E9CE;
        span{
            font-size:10px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(127,127,127,1);
            line-height:23px;
            &:first-of-type{
                margin-right: 1.5rem;
            }
        }
    }
    .text{
        font-size:12px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(127,127,127,1);
        line-height:23px;
        padding-bottom: 1.5625rem;
    }
    padding: 20px 16px 0;
    .top{
        display:flex;
        justify-content: space-between;
        margin-bottom:1.875rem;
        .follow{
            width:4.25rem;
            align-self: center;
            img{
                width:100%;
            }
        }
        .left{
            .user{
                p{
                font-size:13px;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(51,51,51,1);
                line-height:18px;
                }
                span{
                    font-size:10px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height:18px;
                }
            }
            display:flex;
            .img{
                width:2.375rem;
                height:2.375rem;
                margin-right:0.625rem;
                align-self: center;
                img{
                    width:100%;
                }
            }
        }
    }
    .comment{
        margin-top:1.25rem;
        .browser{
            padding-bottom:1.625rem;
        }
    }
}
</style>