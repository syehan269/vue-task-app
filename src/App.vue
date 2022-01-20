<template>
  <router-view></router-view>  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

:root {
  --primary-color: rgb(68, 211, 68);
  --text-primary: #2c3e50;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-primary);
}

* {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
