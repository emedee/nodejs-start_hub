<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="">Sign up</router-link> ||
      <router-link to="/about" class="">Contact List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  z-index: 1;
  padding: 15px 30px;
  border-radius: 10px;
  color: white;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
