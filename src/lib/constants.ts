export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const URL_SSO_GOOGLE = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&state=kawalhaji&redirect_uri=${BASE_URL}/auth/callback/google&response_type=code&include_granted_scopes=true&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email`;

export const CAN_UPLOAD_VIDEO =
  process.env.NEXT_PUBLIC_CAN_UPLOAD_VIDEO === "true";
export const REPORTS_ONLY_FROM_SAUDI_ARABIA =
  process.env.NEXT_PUBLIC_REPORTS_ONLY_FROM_SAUDI_ARABIA === "true";
