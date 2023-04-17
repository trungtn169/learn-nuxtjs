export default {
  setListTodo(state, payload) {
    console.log(payload)
    state.listTodo = [...payload]
  },
}
