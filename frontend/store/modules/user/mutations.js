export default {
  addUser(state, payload) {
    state.listUser.push(payload)
  },
  getListUser(state, payload) {
    state.listUser = payload
  },
  getListUserCompleted(state, payload) {
    state.listUserCompleted = payload
  },
  deleteUser(state, payload) {
    state.listUser = state.listUser.filter((post) => post.id !== payload)
  },
  deleteUserAll(state) {
    state.listUser = []
  },
}
