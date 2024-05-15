import { Location } from "@/types/location";
import axios from "axios";
import * as React from "react";

export interface GeolocationProps {}

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

const Geolocation: React.FC<GeolocationProps> = ({}) => {
  const [location, setLocation] = React.useState<Location>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorGetCurrentLocation, setErrorGetCurrentLocation] =
    React.useState<string>();

  const accessLocation = async () => {
    if ("geolocation" in navigator) {
      setIsLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location: Location = {
            description: "",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const locationName = await getLocationName(location);
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
    } else {
      setErrorGetCurrentLocation(
        "Geolocation is not supported by this browser."
      );
    }
  };

  React.useEffect(() => {
    accessLocation();
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
            accessLocation();
          }
        });
    } else {
      setErrorGetCurrentLocation(
        "Geolocation is not supported by this browser."
      );
    }
  };

  return (
    <div className="flex items-start gap-2 justify-between pb-[2px]">
      {isLoading && (
        <span className="loading loading-spinner loading-lg text-primary"></span>
      )}
      {!isLoading && !!location && (
        <img src="/icons/location.svg" alt="location found" />
      )}
      {!isLoading && !!errorGetCurrentLocation && (
        <img src="/icons/location_disabled.svg" alt="location is not found" />
      )}
      {!isLoading && errorGetCurrentLocation === "Akses lokasi ditolak" && (
        <button
          className="btn btn-sm bg-primary text-white rounded-full hidden"
          onClick={requestAccessLocationAgain}
        >
          <img
            src="/icons/refresh.svg"
            alt="refresh"
            className="w-[16px] h-[16px] text-white"
          />
        </button>
      )}
      <div className="w-full">
        <div className="text-[12px] font-medium">Lokasi Anda</div>
        <div className="text-[12px]">
          {isLoading
            ? "Sedang mengecek posisi Anda..."
            : location?.description ?? errorGetCurrentLocation}
        </div>
      </div>
    </div>
  );
};

export default Geolocation;
