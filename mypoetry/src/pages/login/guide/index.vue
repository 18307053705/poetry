<template>
    <div>
      <div v-if="isShow" class="img" @click="isShowAction">
           <img src="/images/login/Start page.png" alt="">
      </div>
        <van-swipe indicator-color='transparent'  :loop='isLoop' class="banner" @change="onChangeIndex">
            <van-swipe-item
            v-for="itme in imglist"
            :key="itme.id"
            >
            <img :src="itme.path" alt="" srcset="">
            </van-swipe-item>
        </van-swipe>
        <router-link class="btn" v-if="swiprIndex===2" to='/login' ></router-link>
    </div> 

</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    },
    data(){
        return {
            imglist:[
                {id:1,path:'/images/login/Guide page01.png'},
                {id:2,path:'/images/login/Guide page02.png'},
                {id:3,path:'/images/login/Guide page03.png'}
            ],
            isLoop:false,
            swiprIndex:0,
            isShow:true
        }
    },
    methods:{
        onChangeIndex(index){
            this.swiprIndex = index;
        },
        isShowAction(){
            this.isShow = false;   
        }
    }
}
</script>

<style lang="scss" scoped>

.img{
    width: 100%;
    img{
        width: 100%;
    }
}
.banner{
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
.btn{
    position: absolute;
    width: 106px;
    height: 36px;
    background: url('/images/login/Start reading.png') no-repeat;
    background-size: 100%;
    z-index: 100;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
}
</style>