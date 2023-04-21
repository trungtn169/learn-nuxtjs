export default {
  getCount(state) {
    return state.listCategory.length
  },
  getCountCompleted(state) {
    return state.listCategory.filter((post) => post.completed).length
  },
  getCountCompletedPercent(state, getters) {
    return Math.round((getters.getCountCompleted / getters.getCount) * 100)
  },
  getCountUncompleted(state, getters) {
    return getters.getCount - getters.getCountCompleted
  },
  getCountUncompletedPercent(state, getters) {
    return 100 - getters.getCountCompletedPercent
  },
}
