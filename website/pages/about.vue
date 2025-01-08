<template>
  <div class="container">
    <!-- Header -->
    <div class="header">About Me</div>

    <!-- Prose content -->
    <div class="content">
      <div class="prose">
        <div class="prose-tags">&lt;p&gt;</div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Hendrerit non turpis varius
          molestie scelerisque accumsan elit. Ultrices urna felis mi augue.
          Donec risus vitae sit ipsum aliquam consequat commodo morbi. Duis et
          nibh tincidunt vitae nunc odio facilisis porttitor. Faucibus quis et
          ipsum ante praesent orci. Sit integer viverra ultrices cras cursus
          diam metus fermentum varius. Libero tristique id urna nisi fringilla
          cursus maecenas. Adipiscing id leo lectus lectus a orci eget. Massa
          non nec quis lacus at adipiscing.
        </p>
        <div class="prose-tags">&lt;/p&gt;</div>
      </div>
      <img src="/about-me.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "About",
  ogTitle: "About | Sagar Kapoor",
  description: "",
  ogDescription: "",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped>
.container {
  display: flex; // TODO: Might be better to render as a grid instead
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

  .content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;

    .prose {
      color: #ffffff;

      .prose-tags {
        color: #2ad881;
      }
    }
  }

  // iPad Mini
  @media screen and (min-width: 768px) {
    padding: 4rem;

    .header {
      font-size: 2.25rem;
      line-height: 1.5rem;
    }
  }

  // Desktops
  @media screen and (min-width: 1440px) {
    padding: 9rem;

    .header {
      width: 16rem;
      font-size: 2.5rem;
      line-height: 2rem;
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12rem;
    }
  }
}
</style>
