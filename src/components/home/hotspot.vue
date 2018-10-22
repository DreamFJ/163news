<template>
    <div class="hotspot">
        <h2 class="part">
            <img src="../../../static/imgs/fire.svg" alt="fire">24小时热点
        </h2>
        <div class="content">
            <div class="title">{{newsData.title}}</div>
            <div class="image">
                <img src="../../../static/imgs/banner.jpg" alt="">
            </div>
            <div class="info">
                <span>{{newsData.site}}</span>
                <span class="time">{{newsData.time}}</span>
            </div>
        </div>
        <news></news>
        <div class="more">
            <a href="#" class="get-more">查看更多热点</a>
        </div>
    </div>
</template>

<script>
import news from './news.vue'

export default {
    name: 'hotspot',
    components: {news},
    data () {
        return {
            newsData:{
                title:'刘鹤：股市调整和出清 正为股市长期健康发展创造出好的投资机会',
                site:'新华社',
                time:'29分钟前',
                image:''
            }
        }
    }
}
</script>

<style scoped>
.part{
    color: #3F4146;
    font-size: .38rem;
    line-height: .38rem;
    margin: .34rem 0 0 .25rem;
    font-family: "PingFangSC-Medium","Source Han Sans CN",sans-serif;
    font-weight: normal;
}
.part img{
    display: inline-block;
    width: .38rem;
    height: .38rem;
    vertical-align: top;
    margin-right: .1rem;
}
.content{
    padding: .25rem
}
.title{
    font-size: .35rem;
    line-height: .5rem;
    color: rgb(63, 65, 70);
    margin-bottom: .15rem;
    margin-top: 0px;
    padding-right: .15rem;
    font-family: PingFangSC-Medium, "Source Han Sans CN", sans-serif;
    text-align: justify;
    overflow: hidden;
}
.image{
    display: block;
    position: relative;
    margin-bottom: .2rem;
    overflow: hidden;
    border-radius: 0.05rem;
    border: 1px solid;
}
.image img{
    width: 100%;
    height: 100%;
}
.info{
    font-size: .25rem;
    line-height: .25rem;
    color: rgb(155, 158, 163);
    padding-right: .25rem;
}
.more{
    padding: 0 0 .25rem;
    text-align: center;
    font-size: 0;
}
.get-more{
    display: inline-block;
    height: .48rem;
    line-height: .48rem;
    color: rgb(73, 139, 248);
    font-size: .28rem;
    user-select: none;
    font-family: PingFangSC-Medium, "Source Han Sans CN", sans-serif;
    padding: 0 .25rem;
}
</style>

