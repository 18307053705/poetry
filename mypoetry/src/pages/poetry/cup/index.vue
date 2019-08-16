<template>
    <div id='cup'>
        <div class="banner">
            <img src="/images/poetry/Poem_banner.png" alt="">
        </div>
         <div class="tiem">
                {{ time }}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            time:'',
        }
    },
    created(){
        let tiem = new Date();
        let n = tiem.getFullYear();
        let m = tiem.getMonth() + 1 < 10 ? ('0' + (tiem.getMonth() + 1)) : tiem.getMonth() + 1 ;
        let d = tiem.getDate() < 10 ? ('0' + tiem.getDate()) : tiem.getDate();
        this.time = `${n}-${m}-${d}`;
    }
}
</script>


<style lang="scss" scoped>
#cup{
    background: #FBFAF9;
    .banner{
        padding:16px;
        img{
            width: 100%;
        }
    }
    .tiem{
        text-align: center;
        font-size: 10px;
        color: #333333;
    }
}
</style>>


