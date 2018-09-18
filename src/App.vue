<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Home from './components/Home';
export default {
  components:{
    'app-navbar' : Navbar,
    'app-home' : Home
  }
}
</script>

<style>

</style>
