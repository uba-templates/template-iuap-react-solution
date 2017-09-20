import axios from 'axios';
import { err } from 'components/Message';


axios.interceptors.request.use(function(config){
    //在发送请求之前做某事
    config.headers = {'X-Requested-With': 'XMLHttpRequest'};

    if(/PUT|POST|PATCH/.test(config.method)){
        config.headers = Object.assign(config.headers,{'Content-Type': 'application/json'})
    }

    return config;

},function(error){
    //请求错误时做些事
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么

    if(/4\d{2}/.test(error.response.data.status)){
        err('服务器资源不存在');
    }else if(/5\d{2}/.test(error.response.data.status)){
        err('服务器出错啦，请联系管理员。')
    }else{
        err('系统出错啦，请刷新页面。')
    }

    return Promise.reject(error);
});

export default axios;