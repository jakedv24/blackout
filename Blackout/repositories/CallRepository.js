const mockCalls = [
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
];

export function getCallsForTimePeriod(startTime, endTime) {
  return mockCalls;
}
