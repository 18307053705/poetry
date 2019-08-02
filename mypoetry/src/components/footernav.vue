<template>
    <ul id="footernav-itme">
        <li
         v-for="itme in nav"
          :key="itme.id"
          @click="pathAction(itme.path)"
          class="itme"
          :class="{Action:itme.path == footerPath}"
          >
          <i>{{itme.value}}</i>
        </li>
    </ul>
</template>

<script>
export default {
    name:'footernav-itme',
    data(){
        return {
            nav:[
                {id:1,value:'诗词',path:'/poetry'},
                {id:2,value:'茶社',path:'/teahouse'},
                {id:3,value:'题诗',path:'/poem'},
                {id:4,value:'我的',path:'/mine'},
            ],
            footerPath :'/poetry',
        }
    },
    methods:{
        pathAction(path){
            this.$router.push(path);
            sessionStorage.setItem('poetryfooterAction', path);
            this.footerPath = path;
        },
    },
    created(){
        if(sessionStorage.getItem('poetryfooterAction')){
            this.footerPath =sessionStorage.getItem('poetryfooterAction');
        }
        
    }
}
</script>

<style lang="scss" scoped>

#footernav-itme{
    width: 100%;
    line-height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #eee;
    height: 49px;
    display: flex;
    text-align: center;
    .itme{
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    .itme.Action{
        color: #ccc;
        background: #eee;
    }

}

</style>

