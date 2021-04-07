export interface User {
  login: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbCreateResponse {
  name: string;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
