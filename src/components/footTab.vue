<template>
    <div class="foot-tab">
        <div>首页</div>
        <div>视频</div>
        <div>讲讲</div>
        <div>我</div>
    </div>
</template>

<script>
export default {
    name: 'footTab',
    data () {
        return {
            
        }
    },
    created() {},
    methods: {
    }
}
</script>

<style scoped>
.foot-tab{
    display: flex;
    align-items: center;
    height: .6rem;
    padding: .1rem .2rem;
    color: #666;
    font-size: .2rem;
}
</style>
