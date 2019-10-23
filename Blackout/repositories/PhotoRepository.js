export const mockPhotos = [
  { url: "../repositories/mockImages/drunkGuy.jpg" },
  { url: "../repositories/mockImages/drunkPeople.jpg" }
];

export const getPhotosFromStartToEndTime = async (
  startTime,
  endTime,
  callback
) => {
  callback(mockPhotos);
};
