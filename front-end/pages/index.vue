<template>
  <div class="container">
    <h1>Welcome to Nuxt with SASS</h1>
    <p>This is a demo page to test SASS integration in a Nuxt.js project.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Nuxt SASS Demo",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss" .container {
  background-color: lighten($primary-color, 20%);
  padding: 20px;
  border-radius: 10px;

  p {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
