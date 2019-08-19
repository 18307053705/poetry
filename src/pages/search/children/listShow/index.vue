<template>
    <div>
        <li
            v-for="(itme,index) in list"
            :key='index'
            >
            <h3>{{itme.title}}</h3>
            <h4>{{itme.author}}</h4>
            <h5>{{itme.text}}</h5>
        </li>
    </div>
</template>

<script>
export default {
    props:['list']
}
</script>

<style lang="scss" scoped>

    li{
        padding: 15px 0;
        border-bottom: 1px solid #F8E9CE;
        line-height: 20px;
        h3{
            font-size: 13px;
        }
        h4{
            color: #F0CB89;
            font-size: 10px;
        }
        h5{
             color: #999;
            font-size: 11px;
        }
    }
    li:first-child{
        border-bottom: 1px dashed #ccc;
    }




</style>