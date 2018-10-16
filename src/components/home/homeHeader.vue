<template>
    <div class="home-header">
        <i class="logo"></i>
        <div class="search">
            <ul>
                <li>周润发捐58亿</li>
                <li>阚清子恋情</li>
                <li>霍金遗作发售</li>
                <li>崔永元真面饭馆</li>
                <li>周润发捐58亿</li>
            </ul>
        </div>
        <!-- <i class="live-broadcast"></i> -->
        <span class="live-broadcast">直播</span>
    </div>
</template>

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
}
.search li{
    height: .6rem;
}
.live-broadcast{
    width: .5rem;
}
</style>
