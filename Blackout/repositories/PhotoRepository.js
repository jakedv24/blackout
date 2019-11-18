import CameraRoll from "@react-native-community/cameraroll";
import { PermissionsAndroid } from "react-native";

export const getPhotosFromStartToEndTime = (startTime, endTime) => {
  return new Promise(async (resolve, reject) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
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

        let photos = await CameraRoll.getPhotos({
          first: 20,
          assetType: "Photos",
          groupName: "Camera"
        });

        photos = photos.edges
          .filter(p => p.timestamp >= startTime && p.timestamp <= endTime)
          .map(p => {
            let newP = {
              timestamp: p.node.timestamp,
              url: p.node.image.uri
            };

            return newP;
          });

        resolve(photos);
      } else {
        console.warn("not granted");
        reject([]);
      }
    } catch (e) {
      console.warn(e);
      reject([]);
    }
  });
};
