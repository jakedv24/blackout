export const formateDateStringFromMillis = millis => {
  let date = new Date(parseInt(millis, 10));
  return date.toLocaleDateString("en-US");
};
