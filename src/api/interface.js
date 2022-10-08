import axios from "../axios";
export default{
    //查询最近热门搜索
    getSearchHotWords(params){
        return axios.get('/header/searchHotWords.json',params)
    },
    getSearchList(){
        return axios.get('/header/search.json')
    },
    getMenuList(){
        return axios.get('/index/nav.json')
    },
    //有格调数据
    resultsByKeywords(){
        return axios.get('/index/resultsByKeywords.json')
    },
    //获取产品列表数据
    getProductsList(){
        return axios.get('/list/goodsList.json')
    },
    //获取产品分类列表
    getProductsCategroy(){
        return axios.get('/list/classify.json')
    },
    //获取产品区域
    getProductsArea(){
        return axios.get('/list/areaList.json')
    },
    //获取热门城市
    getHotCity(){
        return axios.get('/city/hot.json')
    },
    //最近搜索城市
    getRecentCity(){
        return axios.get('/city/recents.json')
    },
    //获取省份列表
    getProvince(){
        return axios.get('/city/province.json')
    },
    //获取当前位置地理信息
    getCurrentPosition(){
        return axios.get('city/getPosition.json')
    },
    //获取城市列表
    getCityList(){
        return axios.get('/city/cityList.json')
    },
    //登录
    login(params){
        return axios.get('/login',{params})
    },
    //注册
    register(params){
        return axios.get('/register',{params})
    }
}