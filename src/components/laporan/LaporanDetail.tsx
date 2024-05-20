import ImagePreview from "@/components/image/ImagePreview";
import KirimKomentar from "@/components/laporan/components/KirimKomentar";
import ListKomentar from "@/components/laporan/components/ListKomentar";
import StatusLaporanText from "@/components/laporan/components/StatusLaporanText";
import TutupLaporan from "@/components/laporan/components/TutupLaporan";
import VoteReport from "@/components/laporan/components/VoteReport";
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
  const { data: report, isLoading } = useDetailReport({ xid });

  const iconCategory = reportCategories.find(
    (category) => category.id === report?.category.id
  )?.iconText;

  const handleBack = () => {
    router.back();
  };

  if (!report) {
    return (
      <>
        <Header handleBack={handleBack} />
        <div className="flex justify-center p-5">
          <span className="loading loading-spinner" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-white h-screen relative">
        <Header handleBack={handleBack} />
        <div className="overflow-y-auto h-[calc(100vh-100px)]">
          <div className="flex items-center gap-4 px-[16px] py-[12px] border-b border-b-gray-100">
            <div className="text-[10px]">
              <div>No. Laporan</div>
              <div>{report.xid}</div>
            </div>
            <div className="mr-auto">
              <StatusLaporanText status={report.status} />
            </div>
            {report.status.name === "Active" && (
              <TutupLaporan
                statusReport={report.status}
                xid={report.xid}
                version={report.version}
              />
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
                <div className="text-[12px] font-medium">Lokasi Pelaporan</div>
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
              <VoteReport xid={report.xid} count={Number(report.upvoteCount)} />
            </div>
          </div>
          <ListKomentar xid={report.xid} />
        </div>
        <div className="absolute bottom-0 w-full bg-white  border-t-2 border-t-neutral-200">
          {report.status.name === "Active" && (
            <KirimKomentar xid={report.xid} />
          )}
          {report.status.name !== "Active" && (
            <div className="bg-error-light text-red-500 text-[16px] text-center py-4 mb-[-5px] font-bold">
              Laporan Ditutup
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LaporanDetail;
