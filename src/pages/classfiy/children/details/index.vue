<template>

    <app-scroll  id='details'>
        <!-- 头部 -->
        <div class="title">
            <p @click="pushAction">
                <i class="icon"></i>
                <span>{{value}}</span>
            </p>
            
        </div>
        <!-- 展示列表 -->
        <div class="list">
            <li class="item"
            v-for="(itme,index) in list"
            :key="index"
            >
            <h3>{{itme.title}}</h3>
            <h4>{{itme.keyword}}</h4>
            <h5>{{itme.conten}}</h5>
            </li>
        </div>
    </app-scroll>
 
</template>
<script>
import { mapState } from 'vuex';
export default { 
    computed: {
        ...mapState({
            value: state => state.Classfiy.value
        })
    },
    data(){
        return {
            list : new Array(20).fill({title:'关锥',keyword:'先秦',conten:'关关雎鸠,在河之洲'})
        }
    },
    methods:{
        pushAction(){
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="scss" scoped>
#details{
    top: 0;
    .title{
        height: 44px;
        line-height: 44px;
        background: #FFFDF9;
        p{
            display: inline-block;
        }
        .icon{
            display: inline-block;
            width: 11px;
            height: 16px;
            margin-right: 15px;
            background: url('/images/classify/Category_return_icon.png') no-repeat;
        }
        span{
            font-weight: bold;
            font-size: 15px;
        }
    }
    .list{
        .item{
            line-height: 20px;
            margin: 0 36px;
            padding: 20px 0;
            border-bottom: 1px solid #F8E9CE;
            h3{
                
                font-size: 13px;
                font-weight: bold;
            }
            h4{
                font-size: 10px;
                color: #F0CB89;
            }
            h5{
                font-size: 11px;
                color: #999;
            }
        }
    }
}

</style>