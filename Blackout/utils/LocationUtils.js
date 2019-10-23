import haversine from "haversine";

export const getDistanceFromCoordinates = coords => {
  let totalDistance = 0;

  for (let i = 0; i < coords.length - 1; i++) {
    let distance = haversine(coords[i], coords[i + 1], {
      unit: "mile",
      format: "{lon,lat}"
    });
    totalDistance += distance;
  }

  return totalDistance.toFixed(2);
};
