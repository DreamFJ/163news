<template>
    <div class="home-header">
        <i class="logo"></i>
        <div class="search">
            <ul :class="{scrollTop:animate}">
                <li v-for="item in list"><span>{{item}}</span></li>
            </ul>
        </div>
        <!-- <i class="live-broadcast"></i> -->
        <span class="live-broadcast">直播</span>
    </div>
</template>

<script>
export default {
    name: 'homeHeader',
    data () {
        return {
            animate: false,
            list: ['周润发捐58亿','阚清子恋情','霍金遗作发售']
        }
    },
    created() {
        setInterval(this.searchAutoScroll,3000);
    },
    methods: {
        searchAutoScroll() {
            this.animate =true;
            setTimeout(()=>{
                this.list.push(this.list[0]);
                this.list.shift();
                this.animate = false;
            },500);
        }
    }
}
</script>

<style scoped>
.home-header{
    display: flex;
    align-items: center;
    height: .6rem;
    padding: .1rem .2rem;
    background-color: #ee1a1a;
    color: #fff;
    font-size: .2rem;
}
.logo{
    width: .6rem;
    height: .4rem;
    background: url('../../assets/imgs/logo.png') center no-repeat;
}
.search{
    flex: auto;
    background-color: #e96767d8;
    height: .6rem;
    margin: 0 .2rem;
    border-radius: .3rem;
    text-align: center;
    overflow: hidden;
}

.scrollTop{
    transition: all 0.5s;
    margin-top: -0.6rem;
}
.search li{
    height: .6rem;
    line-height: .6rem;
}
.search li span{
    display: inline-block;
    padding-left: .5rem;
    position: relative;
}
.search li span::before{
    content: '';
    width: .5rem;
    height: .6rem;
    position: absolute;
    left: 0;
    background: url('../../assets/imgs/search.png') no-repeat center;
    background-size: .2rem;
}
.live-broadcast{
    width: .4rem;
}
</style>
