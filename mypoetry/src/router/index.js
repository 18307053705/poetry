import Vue from 'vue';
import Router from 'vue-router';
import Poetry from './poetry';
import Teahouse from './teahouse';
import Poem from './poem';
import Mine from './mine';
import Search from './search';
import Classfiy from './classfiy';
import Login from './login';




Vue.use(Router);

const routes = [
    
  ...Poetry,
  ...Teahouse,
  ...Poem,
  ...Mine,
  ...Search,
  ...Classfiy,
  ...Login
  
]
export default new Router({
    mode: 'history',
    
    routes
 
})