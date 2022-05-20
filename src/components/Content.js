import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import CatFace from "./CatFace";
import Time from "./Time";
import CycleCount from "./CycleCount";
import "../style/Content.scss";

import defaultCatImg from "../assets/cat_default.png";
import cryCatImg from "../assets/cat_cry.png";
import sleepCatImg from "../assets/cat_sleep.png";
import meowSound from "../assets/meow.ogg";

function Content() {
  const [catFace, setCatFace] = useState(defaultCatImg);
  const [isRun, setIsRun] = useState(false);

  const [totalSec, setTotalSec] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [playAlarm, { stop }] = useSound(meowSound);

  const cryCat = () => {
    setCatFace(cryCatImg);
    playAlarm();
    setTimeout(() => {
      setCatFace(defaultCatImg);
      stop();
    }, 1000);
  };

  useEffect(() => {
    // 타이머 작동시키기
    if (isRun) {
      if (totalSec > 0) {
        setTimeout(() => {
          setTotalSec(totalSec - 1);
        }, 1000);
        setMin(parseInt(totalSec / 60));
        setSec(parseInt(totalSec % 60));
      } else {
        // 타이머가 0이 되면 초기화
        setIsRun(false);
        setMin(0);
        setSec(0);
        setCycle(cycle + 1);
        cryCat();
      }
    }
  }, [isRun, totalSec, cycle]);

  const startTimer = () => {
    // 타이머가 작동하지 않고 있을 때
    if (!isRun) {
      setIsRun(true); // 타이머의 상태를 작동중으로 변경
      if (catFace !== sleepCatImg) {
        setTotalSec(1800);
      } // 타이머를 1800초(30분으로 세팅)
      cryCat(); // 야옹
    }
  };

  const snoozeTimer = () => {
    if (isRun) {
      // 타이머가 작동중일 때
      setIsRun(false);
      setCatFace(sleepCatImg);
    }
  };

  return (
    <section id='contentBox'>
      <CatFace
        catFaceState={catFace}
        timerState={isRun}
        onClick={startTimer}
        onDrag={snoozeTimer}
      />
      <Time minNum={min} secNum={sec} />
      <CycleCount cycleNum={cycle} />
    </section>
  );
}

export default Content;
