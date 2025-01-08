<template>
  <main class="container">
    <header>
      <div class="heading">
        <div class="tags">&lt;h1&gt;</div>
        <p>
          Hey I am <span class="highlight">Sagar</span>, Full Stack Developer
        </p>
        <div class="tags">&lt;/h1&gt;</div>
      </div>
      <div class="subheading">
        <div class="tags">&lt;p&gt;</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <div class="tags">&lt;/p&gt;</div>
      </div>
    </header>
    <img src="~/public/sagar-kapoor.png" alt="A picture of Sagar Kapoor" />
  </main>
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
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    font-family: Ubuntu;
    font-weight: 500;

    .tags {
      color: #2ad881;
      font-size: 0.75rem;
      line-height: 0.86rem;
    }

    .heading {
      font-size: 2.5rem;
      line-height: 2.8rem;
      margin-bottom: 2rem;

      .highlight {
        color: #2ad881;
      }
    }

    .subheading {
      font-size: 0.75rem;
      line-height: 0.975rem;
    }
  }

  // iPad Mini
  @media screen and (min-width: 768px) {
    padding: 4rem;

    header {
      .heading {
        font-size: 4rem;
        line-height: 4.5rem;
      }

      .subheading {
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    padding: 9rem;
    flex-direction: row;
    align-items: end;

    header {
      .heading {
        font-size: 4rem;
        line-height: 4.5rem;
      }

      .subheading {
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }
  }
}
</style>
