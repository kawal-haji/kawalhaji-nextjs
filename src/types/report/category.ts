export interface ReportCategory {
  id: number;
  name: string;
  icon: string;
}

export const reportCategories: ReportCategory[] = [
  {
    id: 1,
    name: "Konsumsi",
    icon: "konsumsi.png",
  },
  {
    id: 2,
    name: "Akomodasi",
    icon: "akomodasi.png",
  },
  {
    id: 3,
    name: "Transportasi",
    icon: "transportasi.png",
  },
  {
    id: 4,
    name: "Orang Hilang",
    icon: "orang-hilang.png",
  },
];
