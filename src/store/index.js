import Vue from 'vue';
import Vuex from 'vuex';
import Poetry from './poetry';
import Teahoues from './teahoues';
import Mine from './mine';
import Login from './login';
import Classfiy from './classfiy';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Poetry,
        Teahoues,
        Mine,
        Login,
        Classfiy
    }
});