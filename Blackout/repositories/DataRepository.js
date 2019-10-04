import { AsyncStorage } from "react-native";

const summariesKey = "summaries";
const DATA = [
  {
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
  }
];

export function getLastSavedData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(summariesKey)
      .then(summaries => {
        let maxStartTime = 0;
        summaries.forEach(element => {
          if (element.startTime > maxStartTime) {
            maxStartTime = element.startTime;
          }
        });

        AsyncStorage.getItem(maxStartTime)
          .then(data => {
            resolve(data);
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
  AsyncStorage.setItem("tracking", true);
  AsyncStorage.setItem("currentStartTime", now.getTime());
}

export async function stopTracking(callback) {
  const tracking = await AsyncStorage.getItem("tracking");
  if (tracking) {
    const now = new Date();
    AsyncStorage.setItem("tracking", false);
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

    const summaries = await AsyncStorage.getItem(summariesKey);
    summaries.push(newSummary);
    await AsyncStorage.setItem(startTime, newData);

    callback();
  }
}
