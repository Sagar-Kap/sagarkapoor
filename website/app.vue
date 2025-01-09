<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<style lang="scss">
body {
  background-color: #1c1c1c;
}
</style>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (titlechunk) => {
    return titlechunk ? `${titlechunk} | Sagar Kapoor` : "Sagar Kapoor";
  },
  link: [{ rel: "icon", type: "image/svg+xml", href: "./favicon.svg" }],
});
</script>
