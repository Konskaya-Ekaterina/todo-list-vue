<template>
  <div class="home">
    <h1>Main Page</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.home {
  h1 {
    color: $dark-grey;
    text-align: center;
  }
}

</style>