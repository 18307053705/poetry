import Vue from 'vue';
import Router from 'vue-router';
import Poetry from './poetry';
import Teahouse from './teahouse';
import Poem from './poem';
import Mine from './mine';




Vue.use(Router);

const routes = [
    
  ...Poetry,
  ...Teahouse,
  ...Poem,
  ...Mine
  
]
export default new Router({
    mode: 'history',
    
    routes
 
})