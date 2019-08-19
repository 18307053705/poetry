

<template>
    <div id='cup'>
        <BScroll class="bscroll">
           <img class="cupimg" src="../../../../public/images/poetry/Poem_banner.png" alt="">
           <p class="cuptime center">2019-06-04</p>
           <p class="cupdate center">农历五月初二</p>
           <div class="cupnew center">今日新荐</div>

           <h3 class="cuptitle center">木兰花 拟古决绝词柬友</h3>
           <p class="cupcontent center">清代/纳兰性德</p>
            <div class="cupdashed"></div>

           <h3 class="cuptitle center">菩萨蛮 回廊远砌生秋草</h3>
           <p class="cupcontent center">唐代/李商隐</p>
            <div class="cupsolid"></div>

           <h3 class="cuptitle center">幽居冬暮</h3>
           <p class="cupcontent center">唐代/李商隐</p>
            <div class="cupsolid"></div>


        </BScroll>
    </div>
</template>

<script>
import BScroll from '../../../components/AppScroll'
export default{
    components:{
        BScroll,
    }
}


</script>


<style lang="scss" scoped>

.bscroll{
    width: 100%;
    position: absolute;
    top:0px;
    left: 0;
    bottom: 0px;
    overflow: hidden;
    .cupimg{
        display: block;
        width: 91.6%;
        margin: 2% auto 0;
        
    }
    
    .cuptime{
        margin: 2.53% 0 0.99% 0;
        
        font-size: 14px;
    }
    .cupdate{
        font-size: 16px;
    }
    .cupnew{
        color: #fff;
        font-size: 12px;
        width: 69.87%;
        padding: 3%;
        margin: 0 auto;
        background: url('../../../../public/images/poetry/Poem_ancient box.png') no-repeat 0 9px;
        background-size: 100%;
        border: #000 dashed 1px;
    }
    .cuptitle{
        margin-top: 3%;
    }
    .cupcontent{
        margin-top: 1.8%;
        color: #F0CB89;
        margin-bottom: 17%;
    }
    .cupdashed{
        width: 69.87%;
        margin: 0 auto;
        border-bottom: 1px dashed #000;
    }
    .cupsolid{
        width: 69.87%;
        margin: 0 auto;
        border-bottom: 1px solid #F8E9CE;
    }






    .center{
        text-align: center;
        font-weight: bold;
    }

}

</style>






