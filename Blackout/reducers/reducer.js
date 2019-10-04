import { getLastSavedData } from "../repositories/DataRepository";
import { startTracking } from "../repositories/DataRepository";
import { stopTracking } from "../repositories/DataRepository";

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
    case "START_TRACKING":
      startTracking();
      break;
    case "STOP_TRACKING":
      return stopTracking(async () => {
        try {
          const data = await getLastSavedData();
          state = {
            ...state,
            data: data
          };
          return state;
        } catch (err) {
          return console.log(err);
        }
      });
    default:
      break;
  }

  return state;
};
