export const initialState = {
  items: ["Buy Books", "Eat Fruits"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        items: [...state.items, action.value],
      };
    }
    case "DELETE": {
      const updatedItems = state.items.filter((item) => item !== action.value);
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
};

export default reducer;
