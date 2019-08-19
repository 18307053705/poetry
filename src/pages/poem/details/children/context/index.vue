<template>
    <div class="context">
        <h3>
            {{data.title}}
        </h3>
        <ul>
            <li 
            v-for="itme in data.text"
            :key='itme'
            >{{itme}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style lang="scss" scoped>
.context{
    background: url('/images/poem/poem_1_1_Bottom frame.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    overflow: hidden;
    padding-bottom: 27px;
    h3{
        font-size: 15px;
        font-weight: bold;
        padding: 26px 0;
    }
    li{
        font-size: 12px;
        color: #666;
        line-height: 20px;
    }
    
}
</style>