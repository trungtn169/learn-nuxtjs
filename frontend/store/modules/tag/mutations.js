export default {
  addTag(state, payload) {
    state.listTag.push(payload)
  },
  getListTag(state, payload) {
    state.listTag = payload
  },
  getListTagCompleted(state, payload) {
    state.listTagCompleted = payload
  },
  deleteTag(state, payload) {
    state.listTag = state.listTag.filter((post) => post.id !== payload)
  },
  deleteTagAll(state) {
    state.listTag = []
  },
}
