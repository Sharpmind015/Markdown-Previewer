const initialState = {
  markdown: ""
};
const markdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "markdown/markdownSet":
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
};

export default markdownReducer;
