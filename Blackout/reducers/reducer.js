export const reducer = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case "LOAD_LAST_DATA":
      state = {
        ...state,
        data: payload.data
      };

      return state;

    default:
      break;
  }

  return state;
};
