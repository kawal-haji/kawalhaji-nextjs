import { CONTACT_MAIL, CONTACT_PHONE_NUMBER } from "@/lib/constants";
import * as React from "react";

export interface KontakTextProps {}

const KontakText: React.FC<KontakTextProps> = ({}) => {
  return (
    <>
      <div>
        Person in Charge : <strong>Sidiq Permana</strong>
      </div>
      <div>
        Phone :{" "}
        <a href="phone:+6281210841382" className="underline text-blue-500">
          {CONTACT_PHONE_NUMBER}
        </a>{" "}
      </div>
      <div>
        Email :{" "}
        <a
          href="mailto:petugas@kawalhaji.com"
          className="underline text-blue-500"
        >
          {CONTACT_MAIL}
        </a>
      </div>
    </>
  );
};

export default KontakText;
