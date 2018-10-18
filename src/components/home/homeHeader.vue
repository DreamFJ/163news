<template>
    <div class="home-header">
        <div class="header-top">
            <i class="logo"></i>
            <a href="#" class="login">
                <i class="user"></i>
            </a>
        </div>
        <div class="header-nav">
            <div class="nav-list">
                <span v-for="item in navlist" class="nav-item">
                    <a href="#">{{item}}</a>
                </span>
            </div>
            <a href="#" class="expand">
                <i></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeHeader',
    data () {
        return {
            navlist: ['要闻','爱看','热点','小视界','独家','北京','新时代']
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
    width: 2rem;
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
.header-nav{
    height: .8rem;
    line-height: .8rem;
    font-size: .33rem;
    position: relative;
}
/*左右两边阴影*/
.header-nav::before,.header-nav::after{
    content: '';
    display: inline-block;
    height: .8rem;
    position: absolute;
    top: 0;
}
.header-nav::before{
    width: .35rem;
    left: 0;
    background: linear-gradient(to left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
}
/*右边阴影*/
.header-nav::after{
    width: 1.3rem;
    right: 0;
    background: linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%);
}
.nav-list{
    white-space: nowrap;
    word-break: break-all;
    overflow-x: scroll;
}
.nav-item a{
    display: inline-block;
    color: #666;
    padding: 0 .25rem;
}
.expand{
    display: inline-block;
    width: .6rem;
    height: .8rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
}
.expand i{
    display: inline-block;
    background: url('../../../static/imgs/expand.png') center no-repeat;
    background-size: .6rem;
    width: .6rem;
    height: .8rem;
}
</style>
