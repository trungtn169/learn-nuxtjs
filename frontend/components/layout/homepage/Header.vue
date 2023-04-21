<template>
  <div class="header">
    <div class="header__inner primary">
      <v-container class="d-flex align-center justify-space-between flex-wrap">
        <nuxt-link to="/" class="header__logo"
          ><h1 class="white--text">Simple Blog</h1></nuxt-link
        >
        <ul class="header__menu d-flex align-center">
          <li v-for="(item, idx) in topLink" :key="idx">
            <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderHomePage',
  data() {
    return {
      topLink: [
        {
          name: 'Sign Up',
          path: '/signup',
        },
        {
          name: 'Login',
          path: '/login',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.header {
  &__inner {
  }
  &__menu {
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;
    a {
      text-decoration: none;
      color: white;
      &.nuxt-link-exact-active,
      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
