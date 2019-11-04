const mockTexts = [
  {
    outgoing: true,
    contact: "Mom",
    timestamp: 1571944609999,
    message: "Hi Mom! What's up"
  },
  {
    outgoing: false,
    contact: "Mom",
    timestamp: 157195464567,
    message: "Leave me alone please."
  },
  {
    outgoing: false,
    contact: "Nobody",
    timestamp: 157195478686,
    message:
      "This is a really really long message to prove that text wrapping works correctly. I hope it does because its kinda a pain."
  },
  {
    outgoing: false,
    contact: "Dad",
    timestamp: 157195464468,
    message: "Go get em Tiger"
  }
];

export const getTextsForStartAndEndTime = (startTime, endTime, callback) => {
  callback(mockTexts);
};
