export const mockPhotos = [
  { url: "../repositories/mockImages/drunkGuy.jpg", timestamp: 1571944609845 },
  {
    url: "../repositories/mockImages/drunkPeople.jpg",
    timestamp: 1571944609999
  }
];

export const getPhotosFromStartToEndTime = async (
  startTime,
  endTime,
  callback
) => {
  callback(mockPhotos);
};
