<template>
  <main class="container">
    <div class="header">Skills</div>
    <!-- TODO: Add a vertical line -->
    <h2>Development</h2>
    <div class="grid">
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
      <div>Icons</div>
    </div>
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Skills",
  ogTitle: "Skills | Sagar Kapoor",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 1rem;

  .header {
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.25rem;
    color: #2ad881;
    border: solid 2px #2ad881;
    width: 10rem;
    border-top-left-radius: 1.875rem;
    border-bottom-right-radius: 1.875rem;
    text-align: center;
    padding: 1.25rem;
    background: linear-gradient(
      270deg,
      rgba($color: #2ad881, $alpha: 0.06) 0.6%,
      rgba($color: #2ad881, $alpha: 0.25) 99.4%
    );
  }
}
</style>
