import LoginAsGoogle from "@/components/landing_page/components/LoginAsGoogle";
import LoginAsGuest from "@/components/landing_page/components/LoginAsGuest";
import { useRouter } from "next/router";
import * as React from "react";

export interface LandingPageMainProps {}

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (session) {
//     return {
//       redirect: {
//         destination: "/menu/beranda",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// };

const LandingPageMain: React.FC<LandingPageMainProps> = ({}) => {
  const router = useRouter();
  const code = router.query.code as string;
  const isLoadingGoogle = !!code;

  return (
    <>
      <div className="w-full h-screen bg-[#F9F6EA] relative">
        <img
          src="/images/background_splash_screen.png"
          className="w-full h-screen object-cover"
          alt="splash screen"
        />
        <div className="absolute top-0 left-0 w-full h-screen px-8 z-50">
          <div className="mt-[calc(25vh)]">
            <img
              src="/images/logo_with_text.png"
              className="mx-auto"
              alt="logo"
            />
            {isLoadingGoogle ? (
              <div className="flex flex-col items-center gap-2 pt-16">
                <span className="loading loading-spinner" />
                <span className="text-[14px] ">
                  Sedang memproses login google...
                </span>
              </div>
            ) : (
              <>
                <div className="pt-16 pb-4 text-center font-bold">
                  Masuk Akun
                </div>
                <div className="flex flex-col gap-2">
                  <LoginAsGoogle code={code} />
                  <LoginAsGuest />
                </div>
                <div className="text-center pt-8">
                  <a href="/syarat-dan-ketentuan">Syarat dan Ketentuan</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageMain;
