import API from '../api/index.js';
import {
  FetchGet,
  FetchPost
} from '../common/fetch/index.js';

//请求首页轮播图数据
export function getHomeBanner() {
  return new Promise((resolve, reject) => {
    FetchGet(API.HOME_BANNER)
      .then((data) => {
        console.log(data);
        resolve(data)
      })
  })

}