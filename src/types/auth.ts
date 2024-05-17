export interface Session {
  token: string;
  expiredAt: string;
}

export interface LoginResponse {
  session?: Session;
  privileges?: string[];
  user?: User;
  accessSession?: Session;
  refreshSession?: Session;
}

export interface LoginResponseNextAuth {
  id: string;
  token: string;
}

export interface LoginGoogleResponse {
  iss?: string;
  azp?: string;
  aud?: string;
  sub?: string;
  email?: string;
  email_verified?: string;
  at_hash?: string;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  iat?: string;
  exp?: string;
  alg?: string;
  kid?: string;
  typ?: string;
}

export interface Session {
  token: string;
  expiredAt: string;
}

export interface User {
  xid: string;
  fullName: string;
  email?: string;
  phone?: string;
  avatar: Avatar;
  verified: boolean;
  status?: Status;
  preferences?: Preferences;
  createdAt?: string;
  updatedAt?: string;
  modifiedBy?: ModifiedBy;
  version?: string;
  role?: string;
}

export interface Avatar {
  fileName: string;
  url: string;
  signature: string;
}

export interface ModifiedBy {
  id: string;
  fullName: string;
  role: string;
}

export interface Preferences {
  trackLocation: boolean;
}

export interface Status {
  id: number;
  name: string;
}
