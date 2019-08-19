<template>
    <div>
        <list-itme :list='list'></list-itme>
    </div>
</template>


<script>
import List from '../../compon/list'
export default {
    components:{
        [List.name]:List,
    },
    data(){
        return {
            list:new Array(30).fill({value:'先秦'})
        }
    }
}
</script>