<template>
    <div class="app-wrap" ref="wrap">
        <div class="app-content">
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'app-scroll',
    data() {
        return {
            scroll:''
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrap,{
            tap:true,
            click:true,
            scrollY:true,
        })
    },
}
</script>

<style>
    .app-wrap{
        overflow: hidden;
    }
</style>