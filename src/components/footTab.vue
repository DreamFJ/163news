<template>
    <div class="foot-tab">
        <div class="tab-item" v-for="(item,index) in tabList" :key="index">
            <!-- <i :style="{backgroundImage: 'url('+item.icon+'.png)'}"></i> -->
            <i :style="{backgroundImage: 'url(../../static/imgs/'+item.icon+'.png)'}"></i>
            {{item.desc}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'footTab',
    data () {
        return {
            tabList: [
                {
                    // icon:require('../assets/imgs/home.png'),
                    icon: 'home',
                    desc:'首页'
                },
                {
                    icon:'vedio',
                    desc:'视频'
                },
                {
                    icon:'speak',
                    desc:'讲讲'
                },
                {
                    icon:'me',
                    desc:'我'
                }
            ]
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
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: .8rem;
    color: #666;
    font-size: .2rem;
    position: fixed;
    bottom: 0;
    overflow: hidden;
}
.tab-item{
    width: .5rem;
    text-align: center;
}
.tab-item i{
    display: block;
    width: .5rem;
    height: .4rem;
    background-size: .4rem;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
