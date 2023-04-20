<template>
  <v-app>
    <v-main>
      <HeaderLayout />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="info justify-center py-3 mt-10">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderLayout from '~/components/layout/homepage/header.vue'

export default {
  name: 'HomePage',
  data() {
    return {}
  },
  components: { HeaderLayout },
}
</script>
