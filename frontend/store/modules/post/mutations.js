export default {
  addPost(state, payload) {
    state.listPost.push(payload)
  },
  getListPost(state, payload) {
    state.listPost = payload
  },
  getListPostCompleted(state, payload) {
    state.listPostCompleted = payload
  },
  deletePost(state, payload) {
    state.listPost = state.listPost.filter((post) => post.id !== payload)
  },
  deletePostAll(state) {
    state.listPost = []
  },
}
