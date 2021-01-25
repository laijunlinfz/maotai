// 为什么需要content
// https://blog.csdn.net/dengqiu2187/article/details/101510023
// https://www.cnblogs.com/champagne/p/4844682.html
import React, { FC, useEffect, useRef, useCallback } from "react";
import * as utils from "@/utils";
import { Welcome } from "@/types/content";

import "./content.less";

let curSetInterval: NodeJS.Timeout;

const Content: FC = () => {
  const logRef = useRef<HTMLDivElement>(null);
  // const [log, setLog] = useState<string>("");
  // const msg = utils.isJD() ? Welcome.JD : Welcome.TM;
  const timeToStart = utils.timeToStart();
  const timeToStartStr = utils.formatSecond(timeToStart);
  console.log("timeToStartStr --- ", timeToStartStr);
  const isJD = utils.isJD();
  const isTM = utils.isTM();

  const setLog = (str: string): void => {
    // let insertScript = document.createElement("p");
    // insertScript.nodeValue
    logRef.current?.append(str);
  };

  const task = useCallback(() => {
    setLog(`<br>距开始抢购剩: ${timeToStartStr}`);
  }, [timeToStartStr]);

  useEffect(() => {
    curSetInterval = setInterval(task, 5000);
  }, [task]);

  return isJD || isTM ? (
    <div className="content-contaner">
      {/* <div className="panel-content">{log}</div> */}
      {/* <div
        className="panel-content"
        dangerouslySetInnerHTML={{ __html: log }}
      /> */}
      <div ref={logRef} className="panel-content" />
      <div className="content-entry"></div>
    </div>
  ) : null;
};

export default Content;
