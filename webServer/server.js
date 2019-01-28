const express = require('express'); //引入express
const url = require('url')
const api = require('./api/index');
const http = require('http');
const fs = require('fs');
const {
    mock,
    Random
} = require('mockjs');
const server = express(); //开启服务器
server.get(api.HOME_BANNER, (req, res) => { 
    console.log('得到请求');
    console.log(req.url)
    var data = mock({
        'num1|3': [{
            'id|+1': 0,
            img: "@image('375x200','@color()')"
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
server.get(api.BANNER_SUBJECT,(req,res)=>{
    let {id} = url.parse(req.url, true).query;
    if(!id){
        res.json({
            status: 1,
            message: '缺少参数',
            data: null
        });
        return;
    }
    if(id==0||id==1){
 var data = mock({
    'num2|4': [{
        'id|+1': 0,
        img: "@image('150x110','@color()')",
       'location|1-4': [{
            cityName() {
                let result = Random.city();
                if (result.endsWith('市')) {
                    var arr = result.split('');
                    arr.splice(arr.length - 1, 1);
                    result = arr.join('');
                }
                return result;
            }
        }],
        'title|2-4':[{
           titleName(){
               let tit = Random.ctitle( 2, 4 );
               return tit
           }
        }],
        'people|1': ['10-20人', '40-20人', '10-25人', '20-30人', '15-30人', '25-35人', '1-5人','10-20人', '40-20人', '10-25人', '20-30人', '15-30人', '25-35人', '1-5人'],
    }]
  })
        res.json({
            message: 'ok',
            status: 0,
            data:data
        })
    }
 
})








server.listen(9090, 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
    } else {
        console.log('启动成功');
    }
})