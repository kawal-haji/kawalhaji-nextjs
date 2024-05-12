import * as React from "react";

export interface LandingPageMainProps {}

const LandingPageMain: React.FC<LandingPageMainProps> = ({}) => {
  return (
    <>
      <div className="w-full h-screen flex bg-[#F9F6EA] relative">
        <img
          id="background-splash-screen"
          src="/static/images/background_splash_screen.png"
          className="absolute top-0 left-0 w-full h-full object-cover gone-after-3-seconds"
          alt="splash screen"
        />
        <img
          id="background-splash-screen"
          src="/static/images/background_login.png"
          className="absolute bottom-0 left-0 w-full object-cover show-after-3-seconds "
          alt="splash screen"
        />
        <img
          id="background-splash-screen"
          src="/static/images/background_login.png"
          className="absolute top-0 left-0 w-full object-cover show-after-3-seconds "
          alt="splash screen"
        />
        <div className="m-auto w-full px-8 z-50" />
        <img
          src="/static/images/logo_with_text.png"
          className="w-[220px] m-auto"
          alt="logo"
        />
        <div className="pt-16 pb-4 text-center font-bold">Masuk Akun</div>
        <div className="flex flex-col gap-2">
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth?client_id={{ GOOGLE_CLIENT_ID }}&state={{ SESSION }}&redirect_uri={{ BASE_URL }}/auth/callback/google&response_type=code&include_granted_scopes=true&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email"
            hx-push-url="true"
            hx-target="body"
            className="btn bg-white"
          >
            Masuk dengan Google
          </a>
          <button
            hx-get="/home"
            hx-push-url="true"
            hx-target="body"
            className="btn bg-black text-white"
          >
            Masuk sebagai tamu
          </button>
        </div>
        <div className="text-center pt-8">
          <a href="/syarat-dan-ketentuan">Syarat dan Ketentuan</a>
        </div>
      </div>
    </>
  );
};

export default LandingPageMain;
