import axios from 'axios';
import {
    Toast
} from 'mint-ui';
//处理首页列表数据
export function FetchGet(url, params = {}) { //封装ajax函数
    return new Promise((resolve, rejiect) => {
        axios.get(url, {
            params
        })
            .then(response => {
                resolve(response.data.data)
            })

    })
}
export function FetchPost(url, params = {}) {
    axios.post(url, params)
        .then(response => {
            if (response.data.message) {
                Toast({
                    message: '请求错误',
                    duration: 1000 //出现时间为1秒
                })
            } else {
                resolve(response.data.data)
            }
        })
        .catch(error => {
            Toast({
                message: "内部错误",
                duration: 1000
            });
        })
}