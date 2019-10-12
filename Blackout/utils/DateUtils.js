import moment from "moment";

export const formatDateRangeFromMillis = (startMillis, endMillis) => {
  if (startMillis && endMillis) {
    if (datesAreSameDay(startMillis, endMillis)) {
      return `${formatDateStringFromMillis(
        startMillis
      )} ${formatTimeStringFromMillis(
        startMillis
      )} - ${formatTimeStringFromMillis(endMillis)}`;
    }
    return `${formatDateStringWithTimeFromMillis(
      startMillis
    )} to ${formatDateStringWithTimeFromMillis(endMillis)}`;
  }
};

export const formatDateStringFromMillis = millis => {
  return formatDate(millis, "ll");
};

export const formatDateStringWithTimeFromMillis = millis => {
  return formatDate(millis, "lll");
};

export const formatTimeStringFromMillis = millis => {
  return formatDate(millis, "LT");
};

export const datesAreSameDay = (oneMillis, twoMillis) => {
  let dateOne = moment(parseInt(oneMillis, 10));
  let dateTwo = moment(parseInt(twoMillis, 10));

  return dateOne.isSame(dateTwo, "day");
};

formatDate = (millis, format) => {
  let momentDate = moment(parseInt(millis, 10)).format(format);
  return momentDate;
};
