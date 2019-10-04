import { getLastSavedData } from "../repositories/DataRepository";

export const reducer = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case "LOAD_LAST_DATA":
      const data = getLastSavedData();
      state = {
        ...state,
        data: data
      };
      break;
    default:
      break;
  }

  return state;
};
