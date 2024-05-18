import { reportSelectedAtom } from "@/store/report/ReportStore";
import { Report } from "@/types/report/report";
import { useAtom } from "jotai";
import React from "react";

export const useDetailReport = () => {
  const [reportString, setReportString] = useAtom(reportSelectedAtom);
  const [reportObject, setReportObject] = React.useState<Report | null>(
    !!reportString ? JSON.parse(reportString) : null
  );

  React.useEffect(() => {
    setReportObject(!!reportString ? JSON.parse(reportString) : null);
  }, [reportString]);

  const handleSetReport = (report: Report | null) => {
    setReportString(JSON.stringify(report));
  };

  return { report: reportObject, setReport: handleSetReport };
};
