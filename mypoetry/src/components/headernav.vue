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
            <i class="itme"  @click="searchPathAction('serach')" ></i>
            <em class="itme"  @click="searchPathAction('classify')"></em>
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
        searchPathAction(path){
            this.$router.push(path);
        }
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
    height:44px;
    background: #FFFDF9;
    color: #999;
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
        color: #333333;
        font-size: 16px;
        background: url('/images/component/navigation bar_line.png') no-repeat;
        background-size: 60px 4px;
        background-position: center bottom;
    }
        
    }
    div{
        flex: 1;
        line-height:  42px;
        height: 42px;
        text-align: right;
        position: relative;
        .itme{
            display: inline-block;
            width: 18px;
            height: 18px;
            background-size: 100%;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right: 10px;
        }
        i{
            background: url('/images/component/navigation bar_search_icon.png');
            margin-right: 35px;
        }
        em{           
            background: url('/images/component/navigation bar_category_icon.png');
        }
        
    }
}


</style>

