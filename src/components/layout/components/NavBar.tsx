import { useRouter } from "next/router";
import * as React from "react";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const routeTo = (path: string) => {
    router.push(path);
  };
  const isActive = (path: string) => {
    return router.pathname.startsWith(path);
  };

  return (
    <>
      <div className="btm-nav btm-nav-lg border-t-2 mx-auto">
        <button
          className={isActive("/menu/beranda") ? "active" : ""}
          onClick={() => routeTo("/menu/beranda")}
        >
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              isActive("/menu/beranda") ? "text-primary" : "text-[#999999]"
            }
          >
            <path
              d="M19.83 6.51002L13.28 1.27002C12 0.250018 9.99996 0.240018 8.72996 1.26002L2.17996 6.51002C1.23996 7.26002 0.669963 8.76002 0.869963 9.94002L2.12996 17.48C2.41996 19.17 3.98996 20.5 5.69996 20.5H16.3C17.99 20.5 19.59 19.14 19.88 17.47L21.14 9.93002C21.32 8.76002 20.75 7.26002 19.83 6.51002ZM11.75 16.5C11.75 16.91 11.41 17.25 11 17.25C10.59 17.25 10.25 16.91 10.25 16.5V13.5C10.25 13.09 10.59 12.75 11 12.75C11.41 12.75 11.75 13.09 11.75 13.5V16.5Z"
              fill="#00C9B5"
            />
          </svg>
          <span
            className={`text-xs md:text-[13px] ${
              isActive("/menu/beranda") ? "text-primary" : "text-[#999999]"
            }`}
          >
            Beranda
          </span>
        </button>
        <button
          className={isActive("/menu/cari") ? "active" : ""}
          onClick={() => routeTo("/menu/cari")}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              isActive("/menu/cari") ? "text-primary" : "text-[#999999]"
            }
          >
            <path
              d="M16.2476 8.62381C16.2476 10.4165 15.6657 12.0725 14.6853 13.4161L19.6299 18.3646C20.1181 18.8528 20.1181 19.6456 19.6299 20.1338C19.1417 20.6221 18.3489 20.6221 17.8607 20.1338L12.9161 15.1853C11.5725 16.1696 9.91652 16.7476 8.12381 16.7476C3.63619 16.7476 0 13.1114 0 8.62381C0 4.13619 3.63619 0.5 8.12381 0.5C12.6114 0.5 16.2476 4.13619 16.2476 8.62381ZM8.12381 14.248C11.2288 14.248 13.748 11.7288 13.748 8.62381C13.748 5.5188 11.2288 2.99963 8.12381 2.99963C5.0188 2.99963 2.49963 5.5188 2.49963 8.62381C2.49963 11.7288 5.0188 14.248 8.12381 14.248Z"
              fill="#999999"
            />
          </svg>

          <span
            className={`text-xs md:text-[13px] ${
              isActive("/menu/cari") ? "text-primary" : "text-[#999999]"
            }`}
          >
            Cari
          </span>
        </button>
        <button
          className={isActive("/menu/buat-laporan") ? "active" : ""}
          onClick={() => routeTo("/menu/buat-laporan")}
        >
          <div className="rounded-full w-16 h-16 flex absolute bottom-10">
            <img src="/icons/create_laporan.svg" alt="plus" />
          </div>
          ✚
          <span className="text-xs md:text-[13px] truncate text-[#999999] ">
            Buat Laporan
          </span>
        </button>
        <button
          className={isActive("/menu/riwayat") ? "active" : ""}
          onClick={() => routeTo("/menu/riwayat")}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              isActive("/menu/riwayat") ? "text-primary" : "text-[#999999]"
            }
          >
            <path
              d="M15.8001 2.70999C15.3901 2.29999 14.6801 2.57999 14.6801 3.14999V6.63999C14.6801 8.09999 15.9201 9.30999 17.4301 9.30999C18.3801 9.31999 19.7001 9.31999 20.8301 9.31999C21.4001 9.31999 21.7001 8.64999 21.3001 8.24999C19.8601 6.79999 17.2801 4.18999 15.8001 2.70999Z"
              fill="#999999"
            />
            <path
              d="M20.5 10.69H17.61C15.24 10.69 13.31 8.76 13.31 6.39V3.5C13.31 2.95 12.86 2.5 12.31 2.5H8.07C4.99 2.5 2.5 4.5 2.5 8.07V16.93C2.5 20.5 4.99 22.5 8.07 22.5H15.93C19.01 22.5 21.5 20.5 21.5 16.93V11.69C21.5 11.14 21.05 10.69 20.5 10.69ZM11.5 18.25H7.5C7.09 18.25 6.75 17.91 6.75 17.5C6.75 17.09 7.09 16.75 7.5 16.75H11.5C11.91 16.75 12.25 17.09 12.25 17.5C12.25 17.91 11.91 18.25 11.5 18.25ZM13.5 14.25H7.5C7.09 14.25 6.75 13.91 6.75 13.5C6.75 13.09 7.09 12.75 7.5 12.75H13.5C13.91 12.75 14.25 13.09 14.25 13.5C14.25 13.91 13.91 14.25 13.5 14.25Z"
              fill="#999999"
            />
          </svg>
          <span
            className={`text-xs md:text-[13px] ${
              isActive("/menu/riwayat") ? "text-primary" : "text-[#999999]"
            }`}
          >
            Riwayat
          </span>
        </button>
        <button
          className={isActive("/menu/profil") ? "active" : ""}
          onClick={() => routeTo("/menu/profil")}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={
              isActive("/menu/profil") ? "text-primary" : "text-[#999999]"
            }
          >
            <path
              d="M12 2.5C9.38 2.5 7.25 4.63 7.25 7.25C7.25 9.82 9.26 11.9 11.88 11.99C11.96 11.98 12.04 11.98 12.1 11.99C12.12 11.99 12.13 11.99 12.15 11.99C12.16 11.99 12.16 11.99 12.17 11.99C14.73 11.9 16.74 9.82 16.75 7.25C16.75 4.63 14.62 2.5 12 2.5Z"
              fill="#999999"
            />
            <path
              d="M17.08 14.6499C14.29 12.7899 9.73996 12.7899 6.92996 14.6499C5.65996 15.4999 4.95996 16.6499 4.95996 17.8799C4.95996 19.1099 5.65996 20.2499 6.91996 21.0899C8.31996 22.0299 10.16 22.4999 12 22.4999C13.84 22.4999 15.68 22.0299 17.08 21.0899C18.34 20.2399 19.04 19.0999 19.04 17.8599C19.03 16.6299 18.34 15.4899 17.08 14.6499Z"
              fill="#999999"
            />
          </svg>
          <span
            className={`text-xs md:text-[13px] ${
              isActive("/menu/profil") ? "text-primary" : "text-[#999999]"
            }`}
          >
            Profile
          </span>
        </button>
      </div>
    </>
  );
};

export default NavBar;
