import { Location } from "@/types/location";
import axios from "axios";
import * as React from "react";

export interface GeolocationProps {
  onLocationChange?: (location: Location) => void;
}

const getLocationName = async ({ lat, lng }: Location) => {
  var apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data.display_name ?? "Nama Lokasi Tidak Ditemukan";
  } catch (error) {
    return "Nama Lokasi Tidak Ditemukan";
  }
};

const Geolocation: React.FC<GeolocationProps> = ({ onLocationChange }) => {
  const [location, setLocation] = React.useState<Location>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorGetCurrentLocation, setErrorGetCurrentLocation] =
    React.useState<string>();

  const accessLocation = async () => {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const location: Location = {
          description: "",
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const locationName = await getLocationName(location);
        location.description = locationName;
        onLocationChange?.(location);
        setLocation({ ...location, description: locationName });
        setIsLoading(false);
      },
      (error) => {
        setErrorGetCurrentLocation(
          error.PERMISSION_DENIED
            ? "Akses lokasi ditolak"
            : "Lokasi tidak ditemukan"
        );
        setIsLoading(false);
      }
    );
  };

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      accessLocation();
    } else {
      setErrorGetCurrentLocation(
        "Geolocation is not supported by this browser."
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestAccessLocationAgain = () => {
    if ("geolocation" in navigator) {
      navigator.permissions
        .query({
          name: "geolocation",
        })
        .then(function (permissionStatus) {
          // Check if the permission is denied
          if (permissionStatus.state === "denied") {
            const isConfirmed = window.confirm(
              "Aplikasi membutuhkan akses lokasi untuk berfungsi dengan baik. Izinkan akses lokasi?"
            );
            if (isConfirmed) {
              accessLocation();
            }
          }
        });
    } else {
      setErrorGetCurrentLocation(
        "Geolocation is not supported by this browser."
      );
    }
  };

  return (
    <div className="flex items-start gap-2 md:gap-4 justify-between pb-[2px]">
      {isLoading && (
        <span className="loading loading-spinner loading-lg text-primary"></span>
      )}
      {!isLoading && !!location && (
        <img src="/icons/location.svg" alt="location found" />
      )}
      {!isLoading && !!errorGetCurrentLocation && (
        <img src="/icons/location_disabled.svg" alt="location is not found" />
      )}
      <div className="w-full">
        <div className="text-[12px] md:text-[14px] font-medium">
          Lokasi Anda
        </div>
        <div className="text-[12px] md:text-[14px]">
          {isLoading
            ? "Sedang mengecek posisi Anda..."
            : location?.description ?? errorGetCurrentLocation}
        </div>
      </div>
      {!isLoading && !!errorGetCurrentLocation && (
        <img
          src="/icons/refresh.svg"
          alt="refresh"
          className="w-[20px] h-[20px] mt-2 mr-1 text-white"
          onClick={requestAccessLocationAgain}
        />
      )}
    </div>
  );
};

export default Geolocation;
