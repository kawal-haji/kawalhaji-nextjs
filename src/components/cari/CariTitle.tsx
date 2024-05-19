import * as React from "react";

import { PaginationReportFilter } from "@/apis/user_report/getListUserReport";

export interface CariTitleProps {
  filter: PaginationReportFilter;
  setFilter: React.Dispatch<React.SetStateAction<PaginationReportFilter>>;
}

const CariTitle: React.FC<CariTitleProps> = ({ filter, setFilter }) => {
  const [title, setTitle] = React.useState<string>("");
  const [timeoutTitle, setTimeoutTitle] = React.useState<NodeJS.Timeout | null>(
    null
  );

  const handleChangeTitleTimeout = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutTitle) clearTimeout(timeoutTitle);
    const title = e.target.value;
    setTitle(title);

    setTimeoutTitle(
      setTimeout(() => {
        setFilter((prev) => {
          return {
            ...prev,
            title: title,
          };
        });
      }, 500)
    );
  };

  return (
    <>
      <label className="input input-bordered flex items-center gap-2 bg-gray-200 rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-[24px] h-[24px] text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="grow border-none"
          placeholder="Cari Laporan"
          value={title}
          onChange={handleChangeTitleTimeout}
        />
      </label>
    </>
  );
};

export default CariTitle;
