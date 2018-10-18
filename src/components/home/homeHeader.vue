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
            <a href="#">
                <i class="expand"></i>
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
.header-nav{
    height: .6rem;
    line-height: .6rem;
    font-size: .33rem;
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
    background: url('../../../static/imgs/expand.png') center no-repeat;
    background-size: .43rem;
    width: .43rem;
    height: .43rem;
}
</style>
