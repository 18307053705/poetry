<template>
    <div id='drɪŋk'>
        <app-scroll class="wrap">
        <div class="today">
        <h4>今日新茶</h4>
        </div>
        <div class="img">
            <img src="../../../../public/images/z_teahose/Tea house_Drink _picture1.png" alt="">
        </div>
        <div class="comment">
            <div class="left">
                <div class="userImg">
                    <img src="../../../../public/images/z_teahose/Tea house_picture1.png" alt="">
                </div>
                <p>初夏的风</p>
            </div>
            <div class="right">
                <h4>
                    <img src="../../../../public/images/z_teahose/Tea house_Find_icon.png" alt="">
                    <span>4962</span>
                </h4>
                <h4>
                    <img src="../../../../public/images/z_teahose/Tea house_comment_icon.png" alt="">
                    <span>62</span>
                </h4>
            </div>
        </div>

        <div class="img">
            <img src="../../../../public/images/z_teahose/Tea house_Drink _picture1.png" alt="">
        </div>
        <div class="comment">
            <div class="left">
                <div class="userImg">
                    <img src="../../../../public/images/z_teahose/Tea house_picture1.png" alt="">
                </div>
                <p>初夏的风</p>
            </div>
            <div class="right">
                <h4>
                    <img src="../../../../public/images/z_teahose/Tea house_Find_icon.png" alt="">
                    <span>4962</span>
                </h4>
                <h4>
                    <img src="../../../../public/images/z_teahose/Tea house_comment_icon.png" alt="">
                    <span>62</span>
                </h4>
            </div>
        </div>
    </app-scroll>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#drɪŋk{
    .img{
        width:100%;
        img{
            width:100%;
        }
    }
    .wrap{
        position: absolute;
        top:1rem;
        bottom:0;
        right:1rem;
        left:1rem;
        box-sizing: border-box;
    }
    .today{
    text-align: center;
    margin-top:20px;
    margin-bottom:25px;
    h4{
        width:16.25rem;
        margin:0 auto;
        background:url('../../../../public/images/z_teahose/Poem_ancient box.png') no-repeat ;
        background-size:100%;
        font-size:10px;
        color:rgba(251,251,251,1);
        line-height:25px;
        background-position: 0 4px;
        margin-top: 8px;
    }
}
.comment{
            display:flex;
            justify-content: space-between;
            padding: 10px 10px;
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
