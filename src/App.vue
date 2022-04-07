<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/todo-list">To-do List</router-link>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  margin-bottom: 40px;
  padding: 20px 30px;
  text-align: center;

  a {
    margin-right: 20px;
    color: $dark-grey;
    font-weight: bold;

    &.router-link-exact-active {
      color: #3bc29b;
    }

    &:last-child{
      margin-right: 0;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

</style>