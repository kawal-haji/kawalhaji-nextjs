import { SortByUserReport } from "@/apis/user_report/getListUserReport";
import * as React from "react";

export interface CariSortByProps {
  sortBy: SortByUserReport;
  setSortBy: React.Dispatch<React.SetStateAction<SortByUserReport>>;
}

const CariSortBy: React.FC<CariSortByProps> = ({ sortBy, setSortBy }) => {
  const [sortByLocal, setSortByLocal] =
    React.useState<SortByUserReport>(sortBy);
  const pencarianModalRef = React.useRef<HTMLDialogElement>(null);

  const handleSetSortBy = () => {
    setSortBy(sortByLocal);
    pencarianModalRef.current?.close();
  };

  return (
    <>
      <img
        src="/icons/sort.svg"
        alt="Filter"
        className="w-[24px] h-[24px] cursor-pointer"
        onClick={() => pencarianModalRef.current?.showModal()}
      />
      <dialog ref={pencarianModalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-[20px]">Urutkan</h3>
          <div className="space-y-2 py-[12px]">
            <div
              className={`form-control border ${
                sortByLocal === SortByUserReport.MOST_VOTED
                  ? "border-primary"
                  : "border-gray-200"
              } rounded-md p-[10px]`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort_search"
                  className="radio checked:bg-primary"
                  checked={sortByLocal === SortByUserReport.MOST_VOTED}
                  onChange={() => setSortByLocal(SortByUserReport.MOST_VOTED)}
                />
                <div className="text-[14px]">Urutkan dukungan terbanyak</div>
              </label>
            </div>
            <div
              className={`form-control border ${
                sortByLocal === SortByUserReport.MOST_COMMENTED
                  ? "border-primary"
                  : "border-gray-200"
              } rounded-md p-[10px]`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort_search"
                  className="radio checked:bg-primary"
                  checked={sortByLocal === SortByUserReport.MOST_COMMENTED}
                  onChange={() =>
                    setSortByLocal(SortByUserReport.MOST_COMMENTED)
                  }
                />
                <div className="text-[14px]">Urutkan komentar terbanyak</div>
              </label>
            </div>
            <div
              className={`form-control border ${
                sortByLocal === SortByUserReport.LATEST
                  ? "border-primary"
                  : "border-gray-200"
              } rounded-md p-[10px]`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort_search"
                  className="radio checked:bg-primary"
                  checked={sortByLocal === SortByUserReport.LATEST}
                  onChange={() => setSortByLocal(SortByUserReport.LATEST)}
                />
                <div className="text-[14px]">Urutkan laporan terbaru</div>
              </label>
            </div>
            <div
              className={`form-control border ${
                sortByLocal === SortByUserReport.TITLE_ASC
                  ? "border-primary"
                  : "border-gray-200"
              } rounded-md p-[10px]`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort_search"
                  className="radio checked:bg-primary"
                  checked={sortByLocal === SortByUserReport.TITLE_ASC}
                  onChange={() => setSortByLocal(SortByUserReport.TITLE_ASC)}
                />
                <div className="text-[14px]">Urutkan menurut abjad</div>
              </label>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex-grow btn text-primary"
              onClick={() => pencarianModalRef.current?.close()}
            >
              Reset
            </button>
            <button
              className="flex-grow btn bg-primary text-white"
              onClick={handleSetSortBy}
            >
              Simpan
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CariSortBy;
