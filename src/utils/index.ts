import { SecKillTime } from "@/types/content";

export const isEmail = (email: string): boolean => {
  const emailrule = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/;
  return emailrule.test(email);
};

export const isJD = (): boolean => {
  if (window.location.href.includes("jd")) {
    return true;
  }
  return false;
};

export const isTM = (): boolean => {
  if (window.location.href.includes("tmall")) {
    return true;
  }
  return false;
};

export const toProductDetail = (): void => {
  const maotaiJDUrl = "https://item.jd.com/100012043978.html";
  const maotaiTMallUrl = "https://item.jd.com/100012043978.html";
  // const hour = new Date().getHours();
  if (window.location.href.includes(maotaiJDUrl)) {
    window.location.href = maotaiJDUrl;
  } else if (window.location.href.includes("tmall")) {
    window.location.href = maotaiTMallUrl;
  } else {
    console.error("toProductDetail : ", "仅限京东和天猫使用");
  }
};

// 距开始时间
export const timeToStart = () => {
  const startTime = isJD() ? SecKillTime.JD : SecKillTime.TM;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullStartTime = `${year}/${month}/${day} ${startTime}:00`;
  const timestamp = Date.now();
  let fullStartTimeTs = new Date(fullStartTime).getTime();
  if (timestamp - fullStartTimeTs > 5 * 60 * 1000) {
    fullStartTimeTs = fullStartTimeTs + 24 * 60 * 60 * 1000;
  }
  return Math.floor((fullStartTimeTs - timestamp) / 1000);
};

// 格式化时间显示
export const formatSecond = (s: number) => {
  const hour = Math.floor(s / 3600);
  const minute = Math.floor((s % 3600) / 60);
  const second = Math.floor(s % 60);
  // return `${hour ? `${hour}:` : ''}${minute ? `${minute}:` : ''}${second}`;
  return `${hour ? `${hour}小时` : ''}${minute ? `${minute}分` : ''}${second}秒`;
};
