import * as React from "react";

export interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = ({}) => {
  return (
    <div className="text-center">
      <h1 className="text-[32px] font-bold">404</h1>
      <h1 className="text-[18px] font-medium">Halaman tidak ditemukan</h1>
      <p className="text-sm">Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

export default Custom404;
