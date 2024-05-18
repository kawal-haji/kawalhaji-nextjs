import ImagePreview from "@/components/image/ImagePreview";
import TutupLaporan from "@/components/laporan/components/TutupLaporan";
import KomentarMain from "@/components/laporan/komentar/KomentarMain";
import { useDetailReport } from "@/hooks/user_report/useDetailReport";
import { formatHumanDayTime } from "@/lib/datetime";
import { reportCategories } from "@/types/report/category";
import { useRouter } from "next/router";
import * as React from "react";

export interface LaporanDetailProps {
  xid: string;
}

const Header = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex items-center gap-4 p-[16px] border-b-2 border-b-gray-100">
        <img
          src="/icons/arrow_left.svg"
          alt="arrow_left"
          height="24"
          className="cursor-pointer"
          onClick={handleBack}
        />
        <div className="text-[17px] font-medium">Detail Laporan</div>
      </div>
    </div>
  );
};

const LaporanDetail: React.FC<LaporanDetailProps> = ({ xid }) => {
  const router = useRouter();
  const { report, setReport } = useDetailReport();

  const iconCategory = reportCategories.find(
    (category) => category.id === report?.category.id
  )?.iconText;

  const handleBack = () => {
    router.back();
  };

  console.log("report", report);

  if (!report) {
    return (
      <>
        <Header handleBack={handleBack} />
        <div className="p-5 italic text-[12px]">Laporan tidak ditemukan</div>
      </>
    );
  }

  return (
    <>
      <div className="bg-white h-screen relative">
        <Header handleBack={handleBack} />
        <div className="overflow-y-auto h-[calc(100vh-48px)]">
          <div className="flex items-center gap-4 px-[16px] py-[12px] border-b border-b-gray-100">
            <div className="text-[10px]">
              <div>No. Laporan</div>
              <div>{report.xid}</div>
            </div>
            <div className="mr-auto">
              {report.status.name === "Active" ? (
                <div className="bg-green-200 text-green-500 rounded-full px-2 py-1 text-[10px] font-bold">
                  Laporan Aktif
                </div>
              ) : (
                <div className="bg-gray-200 text-gray-500 rounded-full px-2 py-1 text-[10px] font-bold">
                  Laporan Ditutup
                </div>
              )}
            </div>
            {report.status.name === "Active" && (
              <TutupLaporan statusReport={report.status} />
            )}
          </div>
          <div className="px-[16px] py-[12px] space-y-2 border-b-8 border-b-gray-100">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1">
                  <div className="text-[10px] font-medium truncate">
                    {report.user?.fullName ?? "Anonim"}
                  </div>
                  <img
                    src="/icons/verified_flag.svg"
                    alt="verified"
                    className="w-[12px] h-[12px]"
                  />
                </div>
                <div className="text-[10px] text-gray-500">
                  {formatHumanDayTime(parseInt(report.createdAt))}
                </div>
              </div>
              <div className="rounded-full bg-green-100  px-2 py-1">
                <div className="flex items-center gap-1">
                  <img
                    src={`/icons/${iconCategory}`}
                    alt="more"
                    className="w-[16px] h-[16px]"
                  />
                  <div className="text-[10px] text-green-500">
                    {report.category.name}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[14px] font-semibold">
                {report.content.title}
              </div>
              <div className="text-[12px] text-gray-500">
                {report.content.description}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
                {report.content.attachments.map((attachment, index) => (
                  <ImagePreview key={index} attachment={attachment} />
                ))}
              </div>
            </div>
            <div className="text-[12px]">Lokasi</div>
            <div className="flex items-start gap-2 justify-between p-[8px] bg-spot-pallate">
              <img src="/icons/location.svg" alt="location" />
              <div className="w-full">
                <div className="text-[12px] font-medium">Lokasi</div>
                <div id="name-location" className="text-[12px]">
                  {report.location.description}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="btn btn-ghost text-[10px]">
                <img
                  src="/icons/comment.svg"
                  alt="Komentar"
                  className="w-[16px] h-[16px]"
                />
                {report.commentCount} Respon
              </button>
              <button className="btn btn-outline btn-sm btn-success text-green-600 text-[10px]">
                <img
                  src="/icons/arrow_circle_up.svg"
                  alt="Dukungan"
                  className="w-[16px] h-[16px]"
                />
                {report.upvoteCount} Dukungan
              </button>
            </div>
          </div>
          {parseInt(report.commentCount) === 0 && (
            <div className="p-[20px]">
              <img
                src="/icons/empty_comment.svg"
                alt="empty"
                className="w-[100px] h-[100px] mx-auto"
              />
              <div className="text-center text-[16px] mt-[20px] font-semibold">
                Belum terdapat komentar!
              </div>
              <div className="text-center text-[14px] text-gray-500 mt-[12px]">
                Saat ini belum terdapat komentar terkait laporan ini.
              </div>
            </div>
          )}
          <KomentarMain xid={report.xid} />
        </div>
        <div className="absolute bottom-0 w-full h-[56px]">
          <div className="bg-[#FDEBF1] text-[#E83475] text-[16px] h-[56px] text-center py-5 font-bold">
            Laporan Ditutup
          </div>
          <label className="input flex items-center gap-2 h-[56px]">
            <input
              type="text"
              className="grow border-none text-[14px] h-[56px]"
              placeholder="Tambahkan komentar..."
            />
            <img
              src="/icons/send_comment.svg"
              alt="search"
              className="w-[32px] h-[32px]"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default LaporanDetail;
