<template>
  <div class="report-todo">
    <h2 class="text-center">Total: {{ getCount }}</h2>
    <v-tabs v-model="tab" color="primary" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat class="mt-5 text-center">
          <v-progress-circular
            :value="getCountCompletedPercent"
            rotate="-90"
            size="100"
            width="3"
            color="accent"
          ></v-progress-circular>
          <p class="mt-3">
            Count: {{ getCountCompleted }}
            {{ `(${getCountCompletedPercent}%)` }}
          </p>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat class="mt-5 text-center">
          <v-progress-circular
            :value="getCountUncompletedPercent"
            rotate="-90"
            size="100"
            width="3"
            color="accent"
          ></v-progress-circular>
          <p class="mt-3">
            Count: {{ getCountUncompleted }}
            {{ `(${getCountUncompletedPercent}%)` }}
          </p>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ReportTodo',
  data() {
    return {
      tab: null,
      items: ['Completed', 'Uncompleted'],
    }
  },
  computed: {
    ...mapGetters('modules/todo', [
      'getCount',
      'getCountCompleted',
      'getCountCompletedPercent',
      'getCountUncompleted',
      'getCountUncompletedPercent',
    ]),
  },
}
</script>
<style lang=""></style>
