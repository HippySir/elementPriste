import axios from 'axios'
import QS from 'qs'
import {Toast} from 'vant'
import Router from 'vue-router'
import router from '../router';

/**
 * 定义请求常量
 */
export const TIME_OUT = 1000;
export const ERR_OK = true;
export const baseUrl = '/';
export const imgBaseUrl = '/img/';

// 请求的提示框
const TIP = (message) => {
  Toast({
    message: message,
    duration: 1000,
    forbidClick: 'click'
  });
}

// //被打去登录页
// const TO_LOGIN = () => {
//   Router.replace({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   })
// }

// 获取实例
let instance = axios.create({timeout: TIME_OUT})


//给post设置默认的请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截的封装
instance.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token');
    config.headers['Authorization'] = '';
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 封装响应拦截
instance.interceptors.response.use(
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(Response),
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 404:
          TIP('网络请求不存在！');
          break;
      }
    } else {
      if (!window.navigator.onLine) {
        TIP('断网了！');
      } else {
        return Promise.reject(error);
      }
    }
  }
)


