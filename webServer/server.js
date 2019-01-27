const express = require('express'); //引入express
const url = require('url')
const api = require('./api/index');
const http = require('http');
const fs = require('fs');
// const {
//     JSDOM
// } = require('jsdom');
const {
    mock,
    Random
} = require('mockjs');
const server = express(); //开启服务器
// var data = mock({
//     'num1|3-10': [{
//         'id|+1': 0,
//         'name': '@cname',
//         'img': "@image('300x200','@color()','@string()')",
//         loaction: {
//             cityName() {
//                 let result = Random.city();
//                 if (result.endsWith('市')) {
//                     var arr = result.split('');
//                     arr.splice(arr.length - 1, 1);
//                     result = arr.join('');
//                 }
//                 return result;
//             }
//         },
//         'rate|2-5.1': 0,
//         time: '@natural(90,150)',
//         'type|1': ['爱情', '战争', '动画', '恐怖', '悬疑', '校园', '生活']
//     }]
// })
server.get(api.HOME_BANNER, (req, res) => { 
    console.log('得到请求');
    console.log(req.url)
    var data = mock({
        'num1|3': [{
            'id|+1': 0,
            'img': "@image('375x200','@color()','@string()')"
        }]
    })
    var arr=['团建','亲子主题房','发现好去处'];
    for (var i = 0; i < arr.length; i++) {
        　　(function (i) {
            data.num1[i].name=arr[i];
            console.log(arr[i])
            })(i);
        }
    res.json({ //发送json数据
        message: 'ok',
        status: 0,
        data: data
    });
})









server.listen(9090, 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
    } else {
        console.log('启动成功');
    }
})