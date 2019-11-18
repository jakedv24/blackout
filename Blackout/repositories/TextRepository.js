import { NativeModules } from "react-native";
import { PermissionsAndroid } from "react-native";

export async function getTextsForStartAndEndTime(startTime, endTime) {
  return new Promise(async (resolve, reject) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: "Text Permissions",
          message: "We need to access your texts to build your summaries.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        startTime = startTime.toString();
        endTime = endTime.toString();
        //TODO use promise in the native module instead of callback?
        NativeModules.MessageModule.getAllMessages(
          startTime.toString(),
          endTime.toString(),
          s => {
            resolve(s);
          }
        );
      } else {
        console.warn("not granted");
        reject([]);
      }
    } catch (e) {
      console.warn("error");
      reject([]);
    }
  });
}
