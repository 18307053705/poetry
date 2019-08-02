<template>
    <div>
        <div class="head">设置</div>
        <div class="user">
            <h1>用户头像</h1>
            <h1>用户名</h1>
            <h1>粉丝|关注</h1>
        </div>
        <ul>
            <li
            v-for="itme in navlist"
            :key='itme.id'
            @click="pathAction(itme.path)"
            >
            {{  itme.value }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            navlist:[
                {id:1,value:'我的收藏',path:'/mine/collect'},
                {id:2,value:'我的下载',path:'/mine/download'},
                {id:3,value:'我的消息',path:'/mine/message'},
                {id:4,value:'我的话题',path:'/mine/topic'},
                {id:5,value:'我的小舍',path:'/mine/hutch'},
                {id:6,value:'我的诗集',path:'/mine/poems'},
                {id:7,value:'系统设置',path:'/mine/settings'},
                {id:8,value:'夜间模式',path:'/mine/nighttime'},
            ],
        }
    },
    methods:{
        pathAction(path){
            this.$router.push(path);
        }
    }
}
</script>

<style lang="scss" scoped>
.head{
    width: 100%;
    height: 44px;
    background: #eee;
}


</style>

