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
  const [catImg, setCatImg] = useState(defaultCatImg);
  const [isRun, setIsRun] = useState(false);
  const [isRest, setIsRest] = useState(false);

  const [totalSec, setTotalSec] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [cycle, setCycle] = useState(0);

  const [play, { stop }] = useSound(meowSound, { volume: 0.3 });

  let defaultSpeed = 1000; // 기본 초 속도
  let defaultSec = 1800; // 기본 타이머 설정 시간(30분)

  // 야옹 알림
  const cryCat = () => {
    setCatImg(cryCatImg);
    play();
    setTimeout(() => {
      setCatImg(defaultCatImg);
      stop();
    }, defaultSpeed);
  };

  // 타이머 작동시키기
  useEffect(() => {
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
        setIsRest(false);
        setMin(0);
        setSec(0);
        setCycle(cycle + 1);
        cryCat();
      }
    }
  }, [isRun, totalSec]);

  // 타이머가 5분 남았을 때 휴식상태로 전환
  useEffect(() => {
    if (min === 5) {
      if (!isRest) {
        setIsRest(true);
        cryCat();
      }
    }
  }, [min]);

  const handleStartTimer = () => {
    if (!isRun) {
      setIsRun(true);
      if (catImg !== sleepCatImg) {
        setTotalSec(defaultSec);
      }
      cryCat();
    }
  };

  const handleSnoozeTimer = () => {
    if (isRun) {
      setIsRun(false);
      setCatImg(sleepCatImg);
    }
  };

  return (
    <section id='contentBox'>
      <CatFace
        catFaceState={catImg}
        timerState={isRun}
        onClick={handleStartTimer}
        onDragEnd={handleSnoozeTimer}
      />
      <Time restState={isRest} minNum={min} secNum={sec} />
      <CycleCount cycleNum={cycle} />
    </section>
  );
}

export default Content;
