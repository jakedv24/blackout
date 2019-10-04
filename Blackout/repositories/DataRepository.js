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
  // TODO implement storage on device
  return DATA[0];
}

export function getDataForStartTime(startTime) {
  // TODO implement storage on device
  return DATA.find(elt => elt.startTime == startTime);
}
