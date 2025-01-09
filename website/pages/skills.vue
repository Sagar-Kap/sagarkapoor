<template>
  <main class="container">
    <div class="header">Skills</div>

    <div class="tagline">
      <div class="vertical-line"></div>
      <h2>Development</h2>
    </div>

    <div class="grid">
      <img src="/logos/cpp.svg" alt="logo of C++" />
      <img src="/logos/css.svg" alt="logo of CSS" />
      <img src="/logos/docker.svg" alt="logo of Docker++" />
      <img src="/logos/graphql.svg" alt="logo of GraphQL" />
      <img src="/logos/html.svg" alt="logo of HTML" />
      <img src="/logos/javascript.svg" alt="logo of JavaScript" />
      <img src="/logos/mongodb.svg" alt="logo of MongoDB" />
      <img src="/logos/mysql.svg" alt="logo of MySQL" />
      <img src="/logos/nodejs.svg" alt="logo of Node.js" />
      <img src="/logos/postgresql.svg" alt="logo of PostgreSQL" />
      <img src="/logos/python.svg" alt="logo of Python" />
      <img src="/logos/react.svg" alt="logo of React" />
      <img src="/logos/sass.svg" alt="logo of SASS" />
      <img src="/logos/tailwindcss.svg" alt="logo of TailwindCSS" />
      <img src="/logos/terraform.svg" alt="logo of Terraform" />
      <img src="/logos/typescript.svg" alt="logo of TypeScript" />
      <img src="/logos/unreal-engine.svg" alt="logo of Unreal Engine" />
      <img src="/logos/vue.svg" alt="logo of Vue.js" />
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
  padding: 1rem;
  margin: 3rem auto;

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

  .tagline {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem auto;

    .vertical-line {
      width: 2px;
      height: 100px;
      background-color: white;
    }
  }

  .grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }

  // iPad Mini
  @media screen and (min-width: 768px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
    }
  }
}
</style>
