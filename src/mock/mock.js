// 获取mockjs插件
var Mock = require('mockjs');

// 获取Mock.Random对象，Mock.Random 是一个工具类，用于生成各种随机数据。
var Random = Mock.Random;

// mock一组文章数据demo
var mockData = function() {
    // banner图片
    var imgs = [];
    for (let i = 0; i < 3; i++) {
        imgs.push(Random.image('300x250'));
    }

    var essays = [];
    for (let i = 0; i < 5; i++) {
        let newEssayObject = {
            title: Random.ctitle(5, 15), // 文章标题
            author: Random.cname(), // 文章作者
            image: Random.dataImage('500x200'), //文章图片
            content: Random.cparagraph() //文章内容
        }
        essays.push(newEssayObject);
    }
    // 返回
    return {
        imgs
    }
}

// 当post或get请求到路由时Mock会拦截请求并返回数据
Mock.mock('/home', /post|get/i, mockData);