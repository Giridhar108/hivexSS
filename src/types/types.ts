import { Dispatch, SetStateAction } from "react";

export interface Imain {
  send: boolean;
  format: boolean;
  setSend: Dispatch<SetStateAction<boolean>>;
  setFormat: Dispatch<SetStateAction<boolean>>;
}

export interface Ifooter {
  setSend: Dispatch<SetStateAction<boolean>>;
  setFormat: Dispatch<SetStateAction<boolean>>;
}

export interface Iauth {
  loading: boolean;
  sessionKey: string | null;
  login: string | null;
  sublogin: string | null;
  status: {status?: 'idle'; id?: ''; explain?: ''};
}

export interface IoneQuery {
  text: string;
  response: string;
  status: string;
}

export interface Iquery {
  oneQuery: IoneQuery;
  lineQuery: IoneQuery[];
}

export interface useOpenFullScreenOutput {
  fullScreen: boolean;
  openFullScreen: () => void;
}

export interface Ivalidate {
  login?: string;
  sublogin?: string;
  password?: string;
}
