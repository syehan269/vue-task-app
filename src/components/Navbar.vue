<template>
  <div id="nav">
    <router-link :to="{ name: 'Task' }">Tasks</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
