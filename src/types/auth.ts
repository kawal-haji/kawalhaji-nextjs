export interface Session {
  token: string;
  expiredAt: string;
}

export interface LoginAnonResponse {
  session: Session;
  privileges: string[];
}

export interface LoginResponseNextAuth {
  id: string;
  token: string;
}
