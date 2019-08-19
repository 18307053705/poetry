<template>
    <ul id="footernav-itme">
        <li
         v-for="itme in nav"
          :key="itme.id"
          @click="pathAction(itme.path)"
          class="itme"
          >
          <img :src="itme.path == footerPath ?  itme.value.url2 :  itme.value.url" alt="">
        </li>
    </ul>
</template>

<script>
export default {
    name:'footernav-itme',
    data(){
        return {
            nav:[
                {id:1,value:{url:'images/component/Poetry_icon1.png',url2:'images/component/TAB bar_poem_icon.png'},path:'/poetry'},
                {id:2,value:{url:'images/component/TAB bar_tea_icon.png',url2:'images/component/Tea house_icon.png'},path:'/teahouse'},
                {id:3,value:{url:'images/component/TAB bar_write_icon.png',url2:'images/component/Poem_icon.png'},path:'/poem'},
                {id:4,value:{url:'images/component/TAB bar_mine_icon.png',url2:'images/component/TAB bar_mine_icon2.png'},path:'/mine'},
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
    background:#FFFDF9;
    height: 49px;
    display: flex;
    text-align: center;
    .itme{
        display: flex;
        flex: 1;
        justify-content: center;
        img{
            width: 24px;
            height: 26px;
            margin-top: 10px;
        }
    }

}

</style>

