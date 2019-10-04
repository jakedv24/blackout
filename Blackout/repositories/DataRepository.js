import { AsyncStorage } from "react-native";

const summariesKey = "summaries";
const DATA = {
  startTime: "1213132", // millis since epoch
  endTime: "1213132",
  calls: [
    {
      placed: true,
      contact: "Mom",
      startTime: "6:03pm",
      callLength: "23 min"
    },
    {
      placed: false,
      contact: "Ex Girl",
      startTime: "6:04pm"
    },
    {
      placed: true,
      contact: "Girlfriend",
      startTime: "6:05pm",
      callLength: "23 min"
    }
  ],
  messages: [
    {
      contact: "Mom",
      timeSent: "12313213",
      message: "Hello mother"
    }
  ]
};

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
        });

        AsyncStorage.getItem(maxStartTime)
          .then(data => {
            // TODO: import libraries to access call log, messages, photos, etc.
            // and append the information to the data object here
            resolve(DATA);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });
}

export function getDataForStartTime(startTime) {
  // TODO implement storage on device
  return DATA.find(elt => elt.startTime == startTime);
}

export function startTracking() {
  const now = new Date();
  AsyncStorage.setItem("tracking", "true");
  AsyncStorage.setItem("currentStartTime", now.getTime().toString());
}

export async function stopTracking(callback) {
  const trackString = await AsyncStorage.getItem("tracking");
  const tracking = trackString === "true";

  if (tracking) {
    const now = new Date();
    AsyncStorage.setItem("tracking", "false");
    const startTime = await AsyncStorage.getItem("currentStartTime");
    const endTime = now.getTime();

    const newData = {
      startTime,
      endTime,
      calls: []
    };

    const newSummary = {
      startTime,
      endTime
    };

    await AsyncStorage.removeItem(summariesKey);
    let summaries = await AsyncStorage.getItem(summariesKey);
    if (summaries) {
      summaries = JSON.parse(summaries);
      summaries.push(newSummary);
    } else {
      AsyncStorage.setItem(summariesKey, JSON.stringify([newSummary]));
    }
    await AsyncStorage.setItem(startTime, JSON.stringify(newData));

    callback();
  }
}
