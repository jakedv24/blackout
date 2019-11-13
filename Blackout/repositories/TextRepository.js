import { NativeModules } from "react-native";
import { PermissionsAndroid } from "react-native";

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
  },
  {
    outgoing: true,
    contact: "hello",
    timestamp: 12123232423,
    message: "Hello world"
  }
];

export const getTextsForStartAndEndTime = async (
  startTime,
  endTime,
  callback
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        title: "Call Log Example",
        message: "Access your call logs",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.warn("Granted");
      NativeModules.MessageModule.getAllMessages(
        startTime,
        JSON.stringify(endTime),
        s => {
          console.warn(JSON.parse(s));

          callback([]);
        }
      );
    } else {
      console.warn("not granted");
      callback([]);
    }
  } catch (e) {
    console.warn("error");
    callback([]);
  }
};
