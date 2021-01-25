// bookmarks

export const getTree = (): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.getTree((res) => {
      console.log("getTree result : ", res);
      resolve(res);
    });
  });
};

export const getSubTree = (id: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.getSubTree(id, (res) => {
      console.log("getSubTree result : ", res);
      resolve(res);
    });
  });
};

export const get = (id: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.get(id, (res) => {
      console.log("get result : ", res);
      resolve(res);
    });
  });
};

export const getChildren = (id: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.getChildren(id, (res) => {
      console.log("getChildren result : ", res);
      resolve(res);
    });
  });
};

export const getRecent = (id: number): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.getRecent(id, (res) => {
      console.log("getRecent result : ", res);
      resolve(res);
    });
  });
};

export const search = (value: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.search(value, (res) => {
      console.log("search result : ", res);
      resolve(res);
    });
  });
};

export const create = (value: any): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.create(value, (res) => {
      console.log("create result : ", res);
      resolve(res);
    });
  });
};

export const move = (id: string, destination: any): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.move(id, destination, (res) => {
      console.log("move result : ", res);
      resolve(res);
    });
  });
};

export const update = (id: string, changes: any): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.update(id, changes, (res) => {
      console.log("update result : ", res);
      resolve(res);
    });
  });
};

export const remove = (id: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.remove(id, (res: any) => {
      console.log("remove result : ", res);
      resolve(res);
    });
  });
};

export const removeTree = (id: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.bookmarks.removeTree(id, (res: any) => {
      console.log("removeTree result : ", res);
      resolve(res);
    });
  });
};

export default {
  getTree,
  getSubTree,
  get,
  getChildren,
  getRecent,
  search,
  create,
  move,
  update,
  remove,
  removeTree,
};
