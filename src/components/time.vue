<template>
    <div id="time">
        <p>{{time}}</p>
    </div>
</template>

<script>
export default {
    name:'Timer',
    data() {
        return {
            time:'',
    }
    },
    created() {
        this.getTimer()
    },
    methods: {
        toDb(num){
            return num<10? '0'+num :num
        },
        getTimer(){
            let date = new Date();
            let y = date.getFullYear();
            let m = date.getMonth()+1;
            let r = date.getDate()

            this.time = `${y}-${this.toDb(m)}-${this.toDb(r)}`
        },
        
    },
}
</script>
<style lang="scss" scoped>
#time{
    p{
        color:#333;
        text-align: center;
        font-size:12px;
        margin-top:20px;
    }
}
</style>