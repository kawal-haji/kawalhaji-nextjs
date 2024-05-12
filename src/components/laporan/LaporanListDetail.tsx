import * as React from "react";

export interface LaporanListDetailProps {}

const LaporanListDetail: React.FC<LaporanListDetailProps> = ({}) => {
  return (
    <>
      <a href="/detail-laporan">
        <div className="bg-white rounded-md px-[12px] pt-[12px]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1">
                <div className="text-[10px] font-medium truncate">
                  Carlos Sainz
                </div>
                <img
                  src="/icons/verified_flag.svg"
                  alt="verified"
                  className="w-[12px] h-[12px]"
                />
              </div>
              <div className="text-[10px] text-gray-500">
                17 Nov 2024, 12:00
              </div>
            </div>
            <div className="rounded-full bg-green-100  px-2 py-1">
              <div className="flex items-center gap-1">
                <img
                  src="/icons/food.svg"
                  alt="more"
                  className="w-[16px] h-[16px]"
                />
                <div className="text-[10px] text-green-500">Makanan</div>
              </div>
            </div>
          </div>
          <div className="mt-[8px]">
            <div className="text-[14px] font-semibold">
              Makanan Kurang Bersih
            </div>
            <div className="text-[12px] text-gray-500">
              Makanan yang saya dapatkan kurang bersih. Banyak yang terkena
              diare.
            </div>
          </div>
          <div className="mt-[8px]">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/images/food_example_1.png"
                alt="like"
                className="w-[93px] h-[93px] rounded-md object-cover"
              />
              <img
                src="/images/food_example_2.png"
                alt="like"
                className="w-[93px] h-[93px] rounded-md object-cover"
              />
              <div className="relative rounded-md">
                <img
                  src="/images/food_example_2.png"
                  alt="like"
                  className="w-[93px] h-[93px] rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center  rounded-md">
                  <img src="/icons/play.svg" alt="Play" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[8px]">
            <div className="flex items-center">
              <button className="btn btn-ghost text-[10px]">
                <img
                  src="/icons/comment.svg"
                  alt="Komentar"
                  className="w-[16px] h-[16px]"
                />
                16 Respon
              </button>
              <button className="btn btn-ghost btn-success text-green-600 text-[10px]">
                <img
                  src="/icons/arrow_circle_up.svg"
                  alt="Dukungan"
                  className="w-[16px] h-[16px]"
                />
                86 Dukungan
              </button>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default LaporanListDetail;
