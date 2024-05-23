import * as React from "react";

import KebijakanPrivasiText from "@/components/kebijakan_privasi/KebijakanPrivasiText";
import { useRouter } from "next/router";

export interface KebijakanPrivasiMainProps {}

const KebijakanPrivasiMain: React.FC<KebijakanPrivasiMainProps> = ({}) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative">
      <img
        src="/icons/background_public.svg"
        className="object-cover absolute top-0 left-0 w-full h-screen"
        alt="background"
      />
      <div className="p-[20px] absolute top-0 h-screen">
        <img
          src="/images/logo_with_text.png"
          className="h-[40px] mb-6 mx-auto"
          alt="Logo"
        />
        <div className="flex items-center gap-4 mb-4 ">
          <img
            src="/icons/arrow_left.svg"
            className="h-4"
            alt="Logo"
            onClick={handleBack}
          />
          <h1 className="text-[18px] font-medium">Kebijakan Privasi</h1>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-160px)] bg-white p-4 rounded-md bg-opacity-75">
          <KebijakanPrivasiText />
        </div>
      </div>
    </div>
  );
};

export default KebijakanPrivasiMain;
