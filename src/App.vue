<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/search">Search</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  margin-left: 60%;
}

#nav a {
  font-weight: bold;
  color: #929394;
}

#nav a.router-link-exact-active {
  color: #ED7D31;
}
</style>
