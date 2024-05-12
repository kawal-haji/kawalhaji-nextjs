import Image from "next/image";
import * as React from "react";

export interface LandingPageMainProps {}

const LandingPageMain: React.FC<LandingPageMainProps> = ({}) => {
  return (
    <>
      <div className="w-full h-screen bg-[#F9F6EA] relative">
        <Image
          src="/images/background_splash_screen.png"
          className="w-full h-screen object-cover"
          alt="splash screen"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 left-0 w-full h-screen px-8 z-50">
          <div className="mt-[calc(25vh)]">
            <Image
              src="/images/logo_with_text.png"
              className="mx-auto"
              alt="logo"
              width={220}
              height={220}
            />
            <div className="pt-16 pb-4 text-center font-bold">Masuk Akun</div>
            <div className="flex flex-col gap-2">
              <a
                href="https://accounts.google.com/o/oauth2/v2/auth?client_id={{ GOOGLE_CLIENT_ID }}&state={{ SESSION }}&redirect_uri={{ BASE_URL }}/auth/callback/google&response_type=code&include_granted_scopes=true&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email"
                className="btn bg-white"
              >
                Masuk dengan Google
              </a>
              <button className="btn bg-black text-white">
                Masuk sebagai tamu
              </button>
            </div>
            <div className="text-center pt-8">
              <a href="/syarat-dan-ketentuan">Syarat dan Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageMain;
