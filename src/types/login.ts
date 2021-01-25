import { BaseRes } from "./index";

export interface LoginDataRes {
  email: string;
  token: string;
  bookmark: any;
}

export interface LoginRes extends BaseRes {
  data: LoginDataRes | string;
}

export type CodeRes = BaseRes;

