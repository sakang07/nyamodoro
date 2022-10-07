import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import CatFace from './CatFace';
import Time from './Time';
import CycleCount from './CycleCount';
import { CAT_IMG, SOUND } from '../constants/url';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
`;

function Content() {
  const [catImg, setCatImg] = useState(CAT_IMG.DEFAULT);
  const [isRun, setIsRun] = useState(false);
  const [isRest, setIsRest] = useState(false);

  const [totalSec, setTotalSec] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [cycle, setCycle] = useState(0);

  const [play, { stop }] = useSound(SOUND.MEOW, { volume: 0.3 });

  const DEFAULT_SPEED = 1000; // 기본 초 속도 (1000)
  const DEFAULT_SEC = 1800; // 기본 타이머 설정 시간 (1800)

  // 야옹 알림
  const cryCat = () => {
    setCatImg(CAT_IMG.CRY);
    play();
    setTimeout(() => {
      setCatImg(CAT_IMG.DEFAULT);
      stop();
    }, 1000);
  };

  // 타이머 작동시키기
  useEffect(() => {
    if (isRun) {
      if (totalSec > 0) {
        setTimeout(() => {
          setTotalSec(totalSec - 1);
        }, DEFAULT_SPEED);
        setMin(parseInt(totalSec / 60, 10));
        setSec(parseInt(totalSec % 60, 10));
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
    if (min === 4) {
      if (!isRest) {
        setIsRest(true);
        cryCat();
      }
    }
  }, [min]);

  const handleStartTimer = () => {
    if (!isRun) {
      setIsRun(true);
      if (catImg !== CAT_IMG.SLEEP) {
        setTotalSec(DEFAULT_SEC);
      }
      cryCat();
    }
  };

  const handleSnoozeTimer = () => {
    if (isRun) {
      setIsRun(false);
      setCatImg(CAT_IMG.SLEEP);
    }
  };

  return (
    <StyledSection>
      <CatFace
        catFaceState={catImg}
        timerIsRun={isRun}
        onClick={handleStartTimer}
        onDragEnd={handleSnoozeTimer}
      />
      <Time isRest={isRest} minNum={min} secNum={sec} />
      <CycleCount cycleNum={cycle} />
    </StyledSection>
  );
}

export default Content;
