export default {
  addTodo(state, payload) {
    state.listTodo.push(payload)
  },
  getListTodo(state, payload) {
    state.listTodo = payload
  },
  deleteTodo(state, payload) {
    state.listTodo = state.listTodo.filter((todo) => todo.id !== payload)
  },
  deleteTodoAll(state) {
    state.listTodo = []
  },
}
