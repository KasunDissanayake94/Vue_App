import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Album from './components/Album.vue'
import Artist from './components/Artist.vue'
import PlayTrack from './components/PlayTrack.vue'


Vue.use(VueRouter);
Vue.component('app-nav',Navbar);

const routes = [
  {path:'/artist' , component:Artist},
  {path:'/album' , name:'album',component:Album},
  {path:'/playtrack' , name:'playtrack',component:PlayTrack},
  {path:'/' , component:Home}

];

const router = new VueRouter({
  routes,
  mode:'history'

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
