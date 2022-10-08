import axios from 'axios'
const instance = axios.create({
    baseURL:'http://api.duyiedu.com/api/meituan'
})
instance.interceptors.request.use((config)=>{
    //在请求发送之前做点什么
    console.log(config)
    return {
        ...config,
        params:{
            ...config.params,
            appkey:'JiaLeW_1612155926688'
        }
    }
},(err)=>{
    //对错误请求做点什么
    return Promise.reject(err)
})
instance.interceptors.response.use(function (response) { 
    return response.data
 },(err)=>{
    return Promise.reject(err)
 })

export default instance;