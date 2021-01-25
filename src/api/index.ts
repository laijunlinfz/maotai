// API请求汇总

import "@/mock";
import { curl } from "@/utils/http";
import { UpdateBookmarkRes, DownloadBookmarkRes } from "@/types/home";
import { LoginRes, CodeRes } from "@/types/login";
import localStorageUtils from '@/utils/localStorageUtils';

// 登获取验证码
export const getCode = (email: string): Promise<CodeRes> => {
  console.log('@@@@@ getCode');
  const url = "/code";
  return curl(url, { email });
};

// 登录接口
export const login = (email: string, code: string, token: string): Promise<LoginRes> => {
  console.log('@@@@@ login');
  const url = "/chrome/login";
  return curl(url, { email, code, token });
};

// 上传书签数据
export const uploadBookmark = (bookmark: string, type: number): Promise<UpdateBookmarkRes> => {
  console.log('@@@@@ uploadBookmark');
  const token = localStorageUtils.getToken();
  const url = "/chrome/bookmark/upload";
  return curl(url, { bookmark, type, token });
};

// 下载书签数据
export const downloadBookmark = (): Promise<DownloadBookmarkRes> => {
  console.log('@@@@@ downloadBookmark');
  const token = localStorageUtils.getToken();
  const url = "/chrome/bookmark/download";
  return curl(url, { token });
};

export default {
  getCode,
  login,
  uploadBookmark,
  downloadBookmark,
};
