import { REPORTS_ONLY_FROM_SAUDI_ARABIA } from "@/lib/constants";

export const isValidCoordinates = (
  latitude: number,
  longitude: number
): boolean => {
  if (!REPORTS_ONLY_FROM_SAUDI_ARABIA) {
    return true;
  }

  var saudiBounds = {
    minLat: 16.37,
    maxLat: 32.16,
    minLong: 34.5,
    maxLong: 55.67,
  };

  if (
    latitude >= saudiBounds.minLat &&
    latitude <= saudiBounds.maxLat &&
    longitude >= saudiBounds.minLong &&
    longitude <= saudiBounds.maxLong
  ) {
    return true; // Koordinat valid di Arab Saudi
  } else {
    return false; // Koordinat tidak valid di Arab Saudi
  }
};
