export enum Method {
  GET = 'GET',
  POST = 'POST',
}

export interface Opts {
  [key: string]: string;
}

export interface Headers {
  "Access-Token"?: string;
  "Content-Type": string;
}
