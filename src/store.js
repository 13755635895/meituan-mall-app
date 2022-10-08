import Vue from 'vue';
import Vuex  from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        position:{},
        userName:''
    },
    mutations:{
        setPosition(state,payload){
            state.position = payload
        },
        setUserName(state,payload){
            state.userName = payload
        }
    },
    actions:{
        setPosition({commit},payload){
            //通过调用接口获取地理位置信息
            commit('setPosition',payload)
        },
        setUserName({commit},payload){
            commit('setUserName',payload)
        }
    }
}) 