import { Icon } from "@/types/icon";

export interface ReportCategory {
  id: number;
  name: string;
  iconText: string;
  icon?: Icon;
}

export const reportCategories: ReportCategory[] = [
  {
    id: 1,
    name: "Konsumsi",
    iconText: "konsumsi.svg",
  },
  {
    id: 2,
    name: "Akomodasi",
    iconText: "akomodasi.svg",
  },
  {
    id: 3,
    name: "Transportasi",
    iconText: "transportasi.svg",
  },
  {
    id: 4,
    name: "Orang Hilang",
    iconText: "orang-hilang.svg",
  },
];
