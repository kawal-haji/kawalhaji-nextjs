export interface ReportCategory {
  id: number;
  name: string;
  icon: string;
}

export const reportCategories: ReportCategory[] = [
  {
    id: 1,
    name: "Konsumsi",
    icon: "konsumsi.svg",
  },
  {
    id: 2,
    name: "Akomodasi",
    icon: "akomodasi.svg",
  },
  {
    id: 3,
    name: "Transportasi",
    icon: "transportasi.svg",
  },
  {
    id: 4,
    name: "Orang Hilang",
    icon: "orang-hilang.svg",
  },
];
