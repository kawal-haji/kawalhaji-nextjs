import LaporanListDetail from "@/components/laporan/LaporanListDetail";
import * as React from "react";

export interface LaporanListProps {
  title?: string;
  description?: string;
}

const LaporanList: React.FC<LaporanListProps> = (props: LaporanListProps) => {
  return (
    <>
      <div className="mx-[16px]">
        {(props.title || props.description) && (
          <>
            <div className="mb-2">
              {props.title && (
                <div className="font-medium text-[14px]">{props.title}</div>
              )}
              {props.description && (
                <div className="text-[14px] text-gray-500">
                  {props.description}
                </div>
              )}
            </div>
          </>
        )}
        <div className="pb-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
          <LaporanListDetail />
        </div>
      </div>
    </>
  );
};

export default LaporanList;
