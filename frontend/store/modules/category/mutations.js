export default {
  addCategory(state, payload) {
    state.listCategory.push(payload)
  },
  getListCategory(state, payload) {
    state.listCategory = payload
  },
  getListCategoryCompleted(state, payload) {
    state.listCategoryCompleted = payload
  },
  deleteCategory(state, payload) {
    state.listCategory = state.listCategory.filter(
      (post) => post.id !== payload
    )
  },
  deleteCategoryAll(state) {
    state.listCategory = []
  },
}
