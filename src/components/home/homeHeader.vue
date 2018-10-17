<template>
    <div class="home-header">
        <div class="header-top">
            <i class="logo"></i>
            <a href="#" class="login">
                <i class="user"></i>
            </a>
        </div>
        <div class="header-nav">

        </div>
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
    border-bottom: 1px solid rgb(221, 217, 217);
}
.header-top{
    position: relative;
    height: .7rem;
    line-height: .7rem;
    text-align: center;
}
.logo{
    display: inline-block;
    width: 1.9rem;
    height: 100%;
    background: url('../../assets/imgs/logo.svg') center no-repeat;
    background-size: 100% auto;
}
.login{
    display: inline-block;
    position: absolute;
    right: .15rem;
    top: .15rem;
    font-size: 0;
    line-height: 1;
}
.user{
    display: inline-block;
    background: url('../../../static/imgs/user.png') center no-repeat;
    background-size: .45rem;
    width: .45rem;
    height: .45rem;
}
</style>
