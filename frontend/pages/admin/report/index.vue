<template>
  <div>
    <h1>Report</h1>
    <ReportTodo />
    <ReportUser />
  </div>
</template>
<script>
import ReportTodo from '~/components/ReportTodo.vue'
import ReportUser from '~/components/ReportUser.vue'
export default {
  name: 'ReportPage',
  components: {
    ReportTodo,
    ReportUser,
  },
}
</script>
<style lang=""></style>
