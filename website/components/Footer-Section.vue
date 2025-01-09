<template>
  <footer>
    <p>Let's Connect</p>
    <hr />
    <p>Say Hello!</p>
    <div>Email Me</div>
    <p>
      For project inquiries only:
      <a href="mailto:contact@weburz.com">contact@weburz.com</a>
    </p>
    <p>Follow Me: social links</p>
    <NuxtLink to="/terms-and-conditions">Terms and Conditions</NuxtLink>
    <NuxtLink to="/distribution-rights">Distribution Rights</NuxtLink>
    <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
    <p>
      Copyright &copy; {{ new Date().getFullYear() }} | Developed at
      <a href="https://weburz.com" target="_blank">
        Weburz | All Rights Reserved
      </a>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: white;
}
</style>
