import { AsyncStorage } from "react-native";
import { getCallsForTimePeriod } from "./CallRepository";
import { getLocationsForStartAndEndTime } from "./LocationRepository";

const summariesKey = "summaries";
const trackingKey = "tracking";

export function getLastSavedData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(summariesKey)
      .then(summaries => {
        if (!summaries) {
          resolve({});
        }

        summaries = JSON.parse(summaries);

        let maxStartTime = 0;
        summaries.forEach(element => {
          if (element.startTime > maxStartTime) {
            maxStartTime = element.startTime;
          }

          if (!element.numCalls) {
            element.numCalls = getCallsForTimePeriod(
              element.startTime,
              element.endTime
            ).length;
          }

          return element;
        });

        AsyncStorage.setItem(summariesKey, JSON.stringify(summaries));
        AsyncStorage.getItem(maxStartTime)
          .then(data => {
            // TODO: import libraries to access call log, messages, photos, etc.
            // and append the information to the data object here
            data = JSON.parse(data);
            if (!data.calls) {
              const calls = getCallsForTimePeriod(data.startTime, data.endTime);
              data.calls = calls;
              const locations = getLocationsForStartAndEndTime(
                data.startTime,
                data.endTime
              );
              data.locations = locations;
              AsyncStorage.setItem(maxStartTime, JSON.stringify(data));
            }

            resolve(data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });
}

export async function getSavedDataForStartTime(startTime, callback) {
  let savedData = await AsyncStorage.getItem(startTime);

  callback(savedData ? JSON.parse(savedData) : {});
}

export function startTracking() {
  const now = new Date();
  AsyncStorage.setItem(trackingKey, "true");
  AsyncStorage.setItem("currentStartTime", now.getTime().toString());
}

export async function stopTracking(callback) {
  const trackString = await AsyncStorage.getItem(trackingKey);
  const tracking = trackString === "true";

  if (tracking) {
    const now = new Date();
    AsyncStorage.setItem(trackingKey, "false");
    const startTime = await AsyncStorage.getItem("currentStartTime");
    const endTime = now.getTime();

    const newData = {
      startTime,
      endTime
    };

    const newSummary = {
      startTime,
      endTime
    };

    let summaries = await AsyncStorage.getItem(summariesKey);
    if (summaries) {
      summaries = JSON.parse(summaries);
      summaries.push(newSummary);
    } else {
      summaries = [newSummary];
    }

    await AsyncStorage.setItem(summariesKey, JSON.stringify(summaries));
    await AsyncStorage.setItem(startTime, JSON.stringify(newData));
    callback();
  }
}

export async function getAllSummaries(callback) {
  let summaries = await AsyncStorage.getItem(summariesKey);

  callback(summaries ? JSON.parse(summaries) : []);
}
