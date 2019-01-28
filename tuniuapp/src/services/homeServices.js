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
//请求轮播图分页数据，需要参数id
export function getBannerContent(id){
  return new Promise((resolve,reject)=>{
    FetchGet(API.BANNER_SUBJECT,{
      id:id
    })
    .then((data)=>{
      console.log(data);
      resolve(data)
    })
  })
}