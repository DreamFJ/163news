<template>
    <div class="exclusive">
        <div class="selection">
            <h2 class="part">
                <img src="../../../static/imgs/qq.svg" alt="qq">独家精选
            </h2>
            <a class="more" href="#">查看更多 ></a>
        </div>
        <div class="content">
            <div class="content-item" v-for="item in newsData">
                <div class="image">
                    <img src="../../../static/imgs/selection.jpeg" alt="">
                </div>
                <div class="title">
                    <div class="inner">{{item.title}}</div>
                </div>
                <div class="info">
                    <span>{{item.site}}</span>
                    <span class="time">{{item.time}}</span>
                </div>
            </div>
        </div>
        <div class="gap"></div>
        <news></news>
        <div class="more">
            <a href="#" class="get-more">查看更多热点</a>
        </div>
    </div>
</template>

<script>
import news from './news.vue'

export default {
    name: 'exclusive',
    components:{news},
    data () {
        return {
            newsData:[
            {
                title:'会计3年挪用公款270多万 一人贪腐4名领导被问责',
                badge: 'true',
                site:'中国经济网',
                time:'1小时前',
                image:''
            },
            {
                title:'会计3年挪用公款270多万 一人贪腐4名领导被问责',
                badge: 'true',
                site:'中国经济网',
                time:'1小时前',
                image:''
            },
            {
                title:'会计3年挪用公款270多万 一人贪腐4名领导被问责',
                badge: 'true',
                site:'中国经济网',
                time:'1小时前',
                image:''
            }
            ]
        }
    }
}
</script>


<style scoped>
.selection{
    position: relative;
}
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
.more{
    display: inline-block;
    position: absolute;
    right: 0;
    top:50%;
    transform: translateY(-50%);
    font-size: .3rem;
    line-height: .3rem;
    color: #9b9ea3;
    vertical-align: top;
    margin-right: .31rem;
    padding-right: .13rem;
}
.content{
    padding: .3rem 0;
    white-space: nowrap;
    overflow-x: scroll;
}
.content-item{
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 43%;
    margin: 0 .12rem;
}
.content-item:first-child{
    margin-left: .24rem;
}
.content-item:last-child{
    margin-right: .24rem;
}
.image{
    border-top-left-radius: 0.05rem;
    border-top-right-radius: 0.05rem;
}
.image img{
    width: 100%;
    height: 100%;
}
.title{
    min-height: 1rem;
    border-bottom-left-radius: 0.06rem;
    border-bottom-right-radius: 0.06rem;
    transform: scale(1);
    padding: 0.16rem;
    border-color: rgb(232, 232, 232);
    border-width: 0.02rem;
    border-style: none solid solid;
    overflow: hidden;
}
.inner{
    display: -webkit-box;
    color: rgb(63, 65, 70);
    text-align: left;
    font-size: .3rem;
    line-height: .4rem;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    word-break: break-all;
    white-space: normal;
    font-family: PingFangSC-Medium, "Source Han Sans CN", sans-serif;
    overflow: hidden;
}
.info{
    font-size: .25rem;
    line-height: .25rem;
    color: rgb(155, 158, 163);
    margin-top: .14rem;
}
</style>
