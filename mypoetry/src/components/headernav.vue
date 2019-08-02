<template>

    <div class="navigation  border-bottom">
        <ul >
            <li
            v-for="itme in list"
            :key='itme.id'
            @click="pathAction(itme.path)"
            :class="{Action:itme.path == footerPath}"
            >
                {{ itme.value }}
            </li>
        </ul>
        <div>
            <i>搜索</i>
            <i>刷选</i>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'headernav-itme',
    props:['list','pathSess'],
    data:function(){
        return {
            footerPath :this.list[0].path,
        }
    },
    methods:{
        pathAction(path){
            this.$router.push(path);
            sessionStorage.setItem(this.pathSess, path);
            this.footerPath = path;
        },
    },
    created(){
        if(sessionStorage.getItem(this.pathSess)){
            this.footerPath =sessionStorage.getItem(this.pathSess);
        }else{
            this.footerPath = this.list[0].path;
        }
    },

}
</script>

<style lang="scss" scoped>

.navigation{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    display: flex;
    height: 44px;
    background: #eee;
    ul{
        flex: 1;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            line-height:  42px;
            height: 42px;
            border-bottom: 2px solid transparent;
        }
        li.Action{
        color: #ccc;
        background: #eee;
        border-color: #ccc;
    }
        
    }
    div{
        flex: 1;
        line-height:  42px;
        height: 42px;
        text-align: right;
        i{
            display: inline-block;
            margin-right: 10px;
        }
    }
}


</style>

