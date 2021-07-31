<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <button @click="homeClick">用户</button>
    <router-link :to="/user/+id">user</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      id: 3
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/user')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: red;
}

/* 
如果修改了router-link-active类名为active
.active{
  color: red;
} */
</style>
