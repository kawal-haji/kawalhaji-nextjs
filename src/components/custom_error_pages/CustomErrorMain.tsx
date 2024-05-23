import * as React from "react";

import Custom404 from "@/components/custom_error_pages/components/Custom404";
import Custom500 from "@/components/custom_error_pages/components/Custom500";
import { useRouter } from "next/router";

export interface CustomErrorMainProps {
  statusCode: number;
}

const CustomErrorMain: React.FC<CustomErrorMainProps> = ({ statusCode }) => {
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
        <div className="flex items-center gap-4 mb-4 ">
          <img
            src="/icons/arrow_left.svg"
            className="h-4"
            alt="Logo"
            onClick={handleBack}
          />
          <img
            src="/images/logo_with_text.png"
            className="h-[30px]"
            alt="Logo"
          />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-90px)] bg-white p-4 rounded-md bg-opacity-75">
          <img
            src="/icons/error.svg"
            className="px-[40px] w-full"
            alt="Error"
          />
          {statusCode === 404 ? <Custom404 /> : <Custom500 />}
          <div className="text-[12px] mt-4 text-center">
            Silahkan klik tombol kembali untuk kembali ke halaman sebelumnya.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomErrorMain;
