import { PermissionsAndroid } from "react-native";
import CallLogs from "react-native-call-log";

export async function getCallsForTimePeriod(startTime, endTime, callback) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      {
        title: "Call Log Example",
        message: "Access your call logs",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      let cl = await CallLogs.loadAll();
      cl = cl
        .filter(
          call => call.timestamp >= startTime && call.timestamp <= endTime
        )
        .map(call => {
          let wrappedCall = {
            placed: call.type !== "MISSED",
            contact:
              call.name === null
                ? formatPhoneNumber(call.phoneNumber + "")
                : call.name,
            timestamp: call.timestamp,
            duration: call.duration
          };

          return wrappedCall;
        });

      callback(cl);
    } else {
      callback([]);
    }
  } catch (e) {
    callback([]);
  }
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
}
