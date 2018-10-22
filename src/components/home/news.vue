<template>
    <div class="news">
        <a href="#">
            <div class="content">
                <div class="title"><span class="badge">专题</span>{{newsData.title}}</div>
                <div class="info">
                    <span>{{newsData.site}}</span>
                    <span class="time">{{newsData.time}}</span>
                </div>
            </div>
            <div class="image">
                <img src="../../../static/imgs/banner.jpg" alt="">
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:'news',
    data () {
        return {
            newsData:{
                title:'会计3年挪用公款270多万 一人贪腐4名领导被问责',
                badge: 'true',
                site:'中国经济网',
                time:'1小时前',
                image:''
            }
        }
    }
}
</script>

<style scoped>
.news{
    position: relative;
}
.news a{
    display: flex;
    padding: .25rem;
}
.news::after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: rgb(233, 233, 233);
}
.title{
    font-size: .35rem;
    line-height: .5rem;
    color: rgb(63, 65, 70);
    margin-bottom: .15rem;
    min-height: .64rem;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: PingFangSC-Medium, "Source Han Sans CN", sans-serif;
    text-align: justify;
}
.badge{
    margin-top: 0.07rem;
    display: inline-block;
    height: .35rem;
    line-height: .35rem;
    font-size: .25rem;
    margin-right: 0.07rem;
    color: rgb(255, 255, 255);
    background-color: rgb(73, 139, 248);
    vertical-align: top;
    padding: 0 .1rem;
    border-radius: 0.03rem;
}
.info{
    font-size: .25rem;
    line-height: .25rem;
    color: rgb(155, 158, 163);
    padding-right: .25rem;
}
.image{
    width: 45%;
    height: 100%;
    margin-left: .2rem;
    border-radius: 0.05rem;
    border: 1px solid;
}
.image img{
    width: 100%;
    height: 100%;
}
.time{
    margin-left: 1em;
}
</style>

