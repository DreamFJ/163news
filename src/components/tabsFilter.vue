<template>
    <div class="tabs-container">
        <div class="main">
            <div class="tabs-header">
                <span>全部频道</span>
                <a class="close-tabs">
                    <i></i>
                </a>
            </div>
        </div>
        <div class="my-tabs-header">
            <div class="title">
                <h3>我的频道</h3>
                <span>点击进入频道</span>
                <span>恢复默认设置</span>
                <div class="button">编辑</div>
            </div>
        </div>
        <ul class="my-tabs-content">
            <li>要闻</li>
            <li>爱看</li>
            <li>图片</li>
            <li>热点</li>
            <li>小视界</li>
            <li>独家</li>
            <li>北京</li>
            <li>新时代</li>
            <li>视频</li>
            <li>娱乐</li>
            <li>NBA</li>
            <li>体育</li>
            <li>足球</li>
            <li>星座</li>
            <li>天气</li>
            <li>财经</li>
            <li>军事</li>
            <li>科技</li>
            <li>数码</li>
            <li>时尚</li>
            <li>汽车</li>
            <li>游戏</li>
            <li>房产</li>
            <li>股票</li>
            <li>音乐</li>
            <li>教育</li>
            <li>文化</li>
            <li>动漫</li>
            <li>国际</li>
            <li>电影</li>
            <li>佛学</li>
            <li>健康</li>
            <li>搞笑</li>
            <li>历史</li>
            <li>鸡汤</li>
            <li>科学</li>
            <li>美食</li>
            <li>CBA</li>
            <li>电竞</li>
            <li>民生</li>
            <li>24小时</li>
            <li>改革开放</li>
        </ul>
        <div class="others-tabs">
             <div class="title">
                <h3>推荐频道</h3>
                <span>地方频道</span>
                <span>点击进入频道</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "tabsFilter",
  data() {
    return {
      text: "123"
    };
  }
};
</script>
<style scoped>
.tabs-container .main .tabs-header {
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.35rem;
  position: relative;
  color: #3f4146;
  background: #fff;
}
.tabs-container .main .tabs-header::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #e0e0e0;
  width: 100%;
  height: 1px;
}
.my-tabs-header {
  height: 0.32rem;
  position: relative;
  line-height: 0.32rem;
  padding-top: -0.3rem;
  margin: 0 0.4rem -0.2rem;
  box-sizing: content-box;
}
.my-tabs-header .title h3 {
  display: inline-block;
  font-size: 0.3rem;
  color: #3f4146;
  font-family: "PingFangSC-Medium", "Source Han Sans CN", sans-serif;
  margin-right: -10px;
}
.my-tabs-header .title span {
  font-size: 0.24rem;
  color: #9b9ea3;
}

.my-tabs-header .title .button {
  position: absolute;
  top: 26px;
  right: 0;
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #eeeff2;
  border-radius: 0.2rem;
  border: 1px solid #eeeff2;
  box-sizing: border-box;
  padding: 0 0.18rem;
  font-size: 0.24rem;
  color: #9b9ea3;
  outline: none;
  float: right;
  /* margin-right: -0.1rem;
  margin-left: 0.24rem; */
  transition: all 0.2s;
  /* vertical-align: middle; */
  font-family: "Microsoft Yahei";
}
.close-tabs i {
  /* width: 39px;
  height: 39px; */
  /* background: url('../../assets/imgs/menuclose.png') center
    no-repeat; */
  /* background-size: 33%; */
  /* display: block;
  position: absolute; */
  /* right: 0px;
  top: 2px; */
}
.my-tabs-content {
  padding: 0 24px 18px;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  box-sizing: border-box;
}

.tabs-container .my-tabs-content li {
  display: inline-block;
  list-style: none;
  vertical-align: top;
  width: 21%;
  margin: 12px 0;
  padding: 0 6px;
  box-sizing: border-box;

  height: 68px;
  line-height: 68px;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: #3f4146;
  background-color: #eeeff2;
  border-radius: 8px;
  user-select: none;
}
.others-tabs {
  height: 28px;
  overflow: hidden;
}
</style>
