export const reducer = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case "LOAD_LAST_DATA":
      state = {
        ...state,
        data: payload.data
      };

      break;
    case "CHANGE_MODAL":
      state = {
        ...state,
        modal: payload.modal
      };

      break;
    case "DISMISS_MODAL":
      state = {
        ...state,
        modal: null
      };

      break;
    case "CHANGE_TRACKING":
      state = {
        ...state,
        tracking: payload.tracking
      };

      break;
    default:
      break;
  }

  return state;
};
