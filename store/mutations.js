export default{
    add (state, text) {
      state.list.push({
        text,
        done: false
      })
    },
    remove (state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
      todo.done = !todo.done
    },
    homedata(state,data){
      state.homedata=data
    },
    sitemapTree(state,data){
      state.sitemapTree=data
    },
    homeExamCalendar(state,data){
      state.homeExamCalendar=data
    },
  }