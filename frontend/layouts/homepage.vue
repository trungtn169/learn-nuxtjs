<template>
  <v-app>
    <h1 align="center" class="primary py-5">
      <span class="white--text">TODO APP</span>
    </h1>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute class="secondary justify-center py-3">
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {}
  },
}
</script>
