//! ok
const firstItem = {
  id: Date.now(),
  title: "我是帅哥我怕谁",
  done: false,
};

function reducer(state = [firstItem], action) {
  switch (action.type) {
    //! ok1
    case "TODO_ADD":
      // !注意：这里要返回一个新的数据，若用 state.push({...})的方式，由于还是原来的对象，所以不会导致render重新执行
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          done: false,
        },
      ];
    //! ok
    case "TODO_DONE":
      state.forEach((item) => {
        if (item.id === action.id) {
          item.done = action.done;
        }
      });
      return [...state];

    //! ok
    case "TODO_EDIT":
      state.forEach((item) => {
        if (item.id === action.id) {
          item.title = action.title;
        }
      });
      return [...state];

    //! ok
    case "TODO_REMOVE":
      state = state.filter((item) => item.id !== action.id);
      return state;

    //! ok
    case "TODO_REMOVE_DONE":
      state = state.filter((item) => !item.done);
      return state;

    default:
      return state;
  }
}
export default reducer;
