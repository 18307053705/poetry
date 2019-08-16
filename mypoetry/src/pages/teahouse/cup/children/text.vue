<template>

    <div class="item-content" @click="detail">
        <h4 class="title">老树逢春生嫩叶</h4>
        <p class="text">老树不惧风暴，立在路旁，虽然树皮开裂，依然顽强得生长，烈日炎炎时甘愿为人们遮阴，送去清凉，请诸位诗友们以“老树逢春生嫩叶”作诗、词、楹联，文体形式不限，歌颂它顽强的生命力，以及崇高的品德。</p>
        <div class="comment">
            <div class="left">
                <div class="userImg">
                    <img src="../../../../../public/images/z_teahose/Tea house_picture1.png" alt="">
                </div>
                <p>初夏的风</p>
            </div>
            <div class="right">
                <h4>
                    <img src="../../../../../public/images/z_teahose/Tea house_Find_icon.png" alt="">
                    <span>4962</span>
                </h4>
                <h4>
                    <img src="../../../../../public/images/z_teahose/Tea house_comment_icon.png" alt="">
                    <span>62</span>
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'text-item',
    methods: {
        detail(){
            this.$router.push('/teahouse/detail/1')
        }
    },
}
</script>

<style lang="scss" scoped>
    .item-content{
        padding: 1.8125rem 2.8125rem 1.25rem;
        border-bottom :1px solid rgba(240,203,137,1);
        .title{
            color:rgba(51,51,51,1);
            font-size:14px;
            margin-bottom:1.25rem;
            text-align: center;
        }
        .text{
            font-size:12px;
            color:rgba(102,102,102,1);
            line-height:1.125rem;
            font-family:PingFang-SC-Medium;
            margin-bottom: 1.25rem;
        }
        .comment{
            display:flex;
            justify-content: space-between;

            .left{
                display:flex;
                .userImg{
                    width:1.5625rem;
                    align-self: center;
                    img{
                        width:100%;
                    }
                }
                p{
                    margin-left:6px;
                    font-size:12px;
                    align-self: center;
                }
            }
            .right{
                display:flex;
                h4{
                    display:flex;
                }
                h4 img{
                    width:1rem;
                    align-self: center;
                    margin-right:4px;
                }
                h4 span{
                    align-self: center;
                    font-size:12px;
                    margin-right:6px;
                    color:#999;
                }
            }
        }
    }
</style>