const mockTexts = [
  {
    outgoing: true,
    to: "Mom",
    timestamp: 1571944609999,
    message: "Hi Mom! What's up"
  },
  {
    outgoing: false,
    from: "Mom",
    timestamp: 157195464567,
    message: "Leave me alone please."
  }
];

export const getTextsForStartAndEndTime = (startTime, endTime, callback) => {
  callback(mockTexts);
};
