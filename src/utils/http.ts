import axios from "axios";
import { DOMAIN } from "@/constants";
import { Method, Opts, Headers } from "@/types/http";
import { getToken } from "./localStorageUtils";

export const curl = async (
  url: string,
  params: any = {},
  method: Method = Method.POST,
  opts: Opts = {}
): Promise<any> => {
  let curUrl = url;
  const keys = Object.keys(params);

  if (method === Method.GET && keys.length > 0) {
    let suffix = "";
    keys.forEach((key) => {
      suffix += `&${key}=${params[key]}`;
    });
    curUrl = url + suffix.replace(/^&/, "?");
  }
  const headers: Headers = {
    "Access-Token": getToken(),
    "Content-Type": "application/json;charset=utf-8",
    // 'Content-Type': 'multipart/form-data' // 上传文件
  };

  try {
    const response = await axios({
      method,
      url: DOMAIN + curUrl,
      data: params,
      headers,
    });
    let result = response.data;
    return result;
  } catch (err) {
    console.error("axios catch err : ", err);
    return err;
  }
};
