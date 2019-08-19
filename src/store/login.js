import {post} from '../utils/request';
import api from '../utils/api';
import { request } from 'https';

const state = {
    loginStatus:false,
};

const mutations = {
    setLoginStatus(store,prmar){
        store.loginStatus=prmar;
    }
};


const actions = {
    loginAction(conext,prmar){
            post(api.LOGIN_API,{user:11112324,pass:232323})
            .then(request=>{
                request.data.code===0 ? conext.commit('setLoginStatus',true) : conext.commit('setLoginStatus',false);
                prmar.push('/poetry');
            })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}