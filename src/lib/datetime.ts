import { format } from "date-fns";

export const timestampToDate = (timestamp: number): Date =>
  new Date(timestamp * 1000);

export const formatHumanDayTime = (dateOrTimestamp: number | Date) => {
  const date =
    dateOrTimestamp instanceof Date
      ? dateOrTimestamp
      : timestampToDate(dateOrTimestamp);

  return format(date, "eeee, d MMM yyyy HH:mm");
};
