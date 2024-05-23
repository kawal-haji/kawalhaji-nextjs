import * as React from "react";

export interface Custom500Props {}

const Custom500: React.FC<Custom500Props> = ({}) => {
  return (
    <div className="text-center">
      <h1 className="text-[32px] font-bold">500</h1>
      <h1 className="text-[18px] font-medium">Terjadi Kesalahan</h1>
      <p className="text-sm">Maaf, terjadi kesalahan disisi server.</p>
    </div>
  );
};

export default Custom500;
