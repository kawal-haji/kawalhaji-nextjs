import BerandaMenu from "@/components/beranda/BerandaMenu";
import LaporanList from "@/components/laporan/LaporanList";
import LaporanSayaList from "@/components/laporan_saya/LaporanSayaList";
import { ReportCategory } from "@/types/report/category";
import Link from "next/link";
import * as React from "react";

export interface BerandaMainProps {}

const BerandaMain: React.FC<BerandaMainProps> = ({}) => {
  const [category, setCategory] = React.useState<ReportCategory | null>(null);

  return (
    <div className="h-screen relative">
      <img
        src="/icons/background_header_home.svg"
        alt="background_header_home"
        className="absolute top-0 left-0 w-full h-[160px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="flex items-center justify-between gap-4 px-[24px] py-[8px] mt-[24px]">
          <div className="truncate text-[16px] font-medium text-white">
            Hello, Silakan Login
            <Link href="/" className="font-medium">
              Disini
            </Link>
          </div>
          <a href="/notifikasi">
            <img
              src="/icons/notification.svg"
              alt="Notifikasi"
              className="w-[24px] h-[24px]"
            />
          </a>
        </div>
        <BerandaMenu category={category} setCategory={setCategory} />
        <div className="overflow-y-auto h-[calc(100vh-260px)]">
          <div className="pt-[12px] pb-[0px] flex flex-col gap-4">
            <LaporanSayaList />
            <LaporanList
              title="Laporan Teratas"
              description="Permasalahan yang populer"
              category={category}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerandaMain;
