<template>
  <div class="container">
    <header>
      <div class="tags">&lt;h1&gt;</div>
      <p>Hey I am <span class="highlight">Sagar</span>, Full Stack Developer</p>
      <div class="tags">&lt;/h1&gt;</div>
    </header>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Home",
  ogTitle: "Home | Sagar Kapoor",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;

  header {
    color: #ffffff;
    font-style: Ubuntu;
    font-weight: 500;
    display: flex;
    flex-direction: column;

    .tags {
      color: #2ad881;
      font-size: 0.75rem;
      line-height: 0.85rem;
    }

    p {
      font-size: 2.5rem;
      line-height: 2.875rem;

      .highlight {
        color: #2ad881;
      }
    }
  }

  // iPad Mini
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    padding: 9rem;
  }
}
</style>
