<template>
    <div class="list">
        <div class="title">
            经典名句
        </div>
        <app-scroll class="showlist">
            <ul>
                <li 
                v-for="(itme,index) in data"
                :key='index'
                >
                    <h3>{{itme.title}}</h3>
                    <h4>{{itme.text}}</h4>
                </li>
            </ul>
        </app-scroll>
        


    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style lang="scss" scoped>
.list{
    .title{
        width: 262px;
        height: 19px;
        line-height: 19px;
        background: url('/images/poem/poem_1_1_Classic name_icon.png') no-repeat;
        background-size: 100% 100%;
        background-position: center;
        margin: 36px auto;
        text-align: center;
        color: #FBFBFB;
        font-size: 10px;
    }
    .showlist{
        position: fixed;
        left: 16px;
        right: 16px;
        bottom: 0;
        top: 278px;
        li{
            border-bottom: 1px dashed #333;
            text-align: center;
            padding: 20px 0;
            line-height: 35px;
            h3{
                font-size: 15px;
                font-weight: bold;
            }
            h4{
                font-size: 13px;
                color: #666;
            }
        }
    }
}
</style>