const TOKEN = 'TOKEN';
const EMAIL = 'EMAIL';

export const setItem = <T>(key: string, value: T): void => {
  let v: string = "";
  if (typeof value === "object") {
    v = JSON.stringify(value);
  } else {
    v = String(value);
  }
  window.localStorage.setItem(key, v);
};

export const getItem = (key: string): string => {
  return window.localStorage.getItem(key) || "";
};

export const removeItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const setToken = (value: string): void => {
  setItem(TOKEN, value);
};

export const getToken = (): string => {
  return getItem(TOKEN) || '';
};

export const setEmail = (value: string): void => {
  setItem(EMAIL, value);
};

export const getEmail = (): string => {
  return getItem(EMAIL) || '';
};

export default {
  setItem,
  getItem,
  removeItem,
  setToken,
  getToken,
  setEmail,
  getEmail
};
