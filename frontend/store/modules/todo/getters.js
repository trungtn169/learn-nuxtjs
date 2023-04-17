export default {
  getCount(state) {
    return state.listTodo.length
  },
  getCountCompleted(state) {
    return state.listTodo.filter((todo) => todo.completed).length
  },
}
