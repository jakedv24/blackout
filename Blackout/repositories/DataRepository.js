import { AsyncStorage } from "react-native";
import { getCallsForTimePeriod } from "./CallRepository";
import { getLocationsForStartAndEndTime } from "./LocationRepository";
import { getDistanceFromCoordinates } from "../utils/LocationUtils";
import { getPhotosFromStartToEndTime } from "./PhotoRepository";
import { getTextsForStartAndEndTime } from "./TextRepository";

const summariesKey = "summaries";
const trackingKey = "tracking";
const startTimeKey = "currentStartTime";

export async function getLastSavedData(callback) {
  let summaries = await AsyncStorage.getItem(summariesKey);

  if (!summaries) {
    callback({});
    return;
  }

  summaries = JSON.parse(summaries);

  let maxStartTime = 0;
  await Promise.all(
    summaries.map(async element => {
      if (element.startTime > maxStartTime) {
        maxStartTime = element.startTime;
      }

      if (!element.numCalls) {
        await getCallsForTimePeriod(
          element.startTime,
          element.endTime,
          calls => {
            element.numCalls = calls.length;
          }
        );
      }

      if (!element.numMiles) {
        element.numMiles = getDistanceFromCoordinates(
          getLocationsForStartAndEndTime(element.startTime, element.endTime)
        );
      }

      if (!element.numPhotos) {
        getPhotosFromStartToEndTime(
          element.startTime,
          element.endTime,
          photos => {
            element.numPhotos = photos.length;
          }
        );
      }

      if (!element.numTexts) {
        await getTextsForStartAndEndTime(
          element.startTime,
          element.endTime,
          texts => {
            element.numTexts = texts.length;
          }
        );
      }

      return element;
    })
  ).then(newSummaries => (summaries = newSummaries));

  AsyncStorage.setItem(summariesKey, JSON.stringify(summaries));
  let data = await AsyncStorage.getItem(maxStartTime.toString());
  // TODO: import libraries to access call log, messages, photos, etc.
  // and append the information to the data object here
  data = JSON.parse(data);
  if (!data.calls) {
    await getCallsForTimePeriod(
      data.startTime,
      data.endTime,
      calls => (data.calls = calls)
    );
  }

  if (!data.locations) {
    const locations = getLocationsForStartAndEndTime(
      data.startTime,
      data.endTime
    );
    data.locations = locations;
  }

  if (!data.photos) {
    getPhotosFromStartToEndTime(
      data.startTime,
      data.endTime,
      photos => (data.photos = photos)
    );
  }

  if (!data.texts) {
    await getTextsForStartAndEndTime(
      data.startTime,
      data.endTime,
      texts => (data.texts = texts)
    );
  }

  AsyncStorage.setItem(maxStartTime, JSON.stringify(data));
  callback(data);
}

export async function getSavedDataForStartTime(startTime, callback) {
  let savedData = await AsyncStorage.getItem(startTime);

  callback(savedData ? JSON.parse(savedData) : {});
}

export function startTracking() {
  const now = new Date();
  AsyncStorage.setItem(trackingKey, "true");
  AsyncStorage.setItem(startTimeKey, JSON.stringify(now.getTime()));
}

export async function stopTracking(callback) {
  const trackString = await AsyncStorage.getItem(trackingKey);
  const tracking = trackString === "true";

  if (tracking) {
    const now = new Date();
    AsyncStorage.setItem(trackingKey, "false");
    const startTime = await AsyncStorage.getItem(startTimeKey);
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

    AsyncStorage.setItem(summariesKey, JSON.stringify(summaries));
    AsyncStorage.setItem(startTime, JSON.stringify(newData));
    callback();
  }
}

export async function getAllSummaries(callback) {
  let summaries = await AsyncStorage.getItem(summariesKey);

  callback(summaries ? JSON.parse(summaries) : []);
}
