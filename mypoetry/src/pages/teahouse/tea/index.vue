<template>
    <div id='tea'>
        <app-scroll class="wrap">
        <div class="today">
            <h4>今日新茶</h4>
        </div>
        <text-item/>
        <text-item/>
        <text-item/><text-item/>
        </app-scroll>
    </div>
</template>

<script>
import Timer from '../cup/children/text'
export default {
components:{
    [Timer.name]:Timer,
}
}
</script>

<style lang="scss">
#tea{
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
}
</style>
