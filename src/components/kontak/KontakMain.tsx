import * as React from "react";

import KontakText from "@/components/kontak/KontakText";
import { useRouter } from "next/router";

export interface KontakMainProps {}

const KontakMain: React.FC<KontakMainProps> = ({}) => {
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
      <div className="p-[20px] absolute top-0 h-screen w-full">
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
          <h1 className="text-[18px] font-medium">
            Kawal Haji Operational Team
          </h1>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-160px)] bg-white p-4 rounded-md bg-opacity-75 w-full">
          <KontakText />
        </div>
      </div>
    </div>
  );
};

export default KontakMain;
