import { BASE_URL, GOOGLE_CLIENT_ID } from "@/lib/constants";
import { signIn } from "next-auth/react";
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

  const handleLoginAsGuest = async () => {
    const response = await signIn("credentials", {
      loginAs: "guest",
    });

    if (response?.error) {
      console.error(response.error);
    } else {
      location.href = "/menu/beranda";
    }
  };

  React.useEffect(() => {
    const handleLoginWithGoogle = async () => {
      const response = await signIn("credentials", {
        loginAs: "google",
        code,
      });

      if (response?.error) {
        console.error(response.error);
      } else {
        location.href = "/menu/beranda";
      }
    };

    if (!!code) {
      handleLoginWithGoogle();
    }
  }, [code]);

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
            <div className="pt-16 pb-4 text-center font-bold">Masuk Akun</div>
            <div className="flex flex-col gap-2">
              <a
                href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&state=kawalhaji&redirect_uri=${BASE_URL}/auth/callback/google&response_type=code&include_granted_scopes=true&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email`}
                className="btn bg-white"
              >
                Masuk dengan Google
              </a>
              <button
                className="btn bg-black text-white"
                onClick={handleLoginAsGuest}
              >
                Masuk sebagai Tamu
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
