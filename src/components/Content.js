// Content.js
// 220119

import React, { useState, useEffect, useRef } from 'react';
import ContentCat from './ContentCat';
import ContentTimer from './ContentTimer';
import ContentCollect from './ContentCollect';

import '../style/Content.scss';
import defaultCat from '../img/cat_default.png';
import cryCat from '../img/cat_cry.png';
import sleepCat from '../img/cat_sleep.png';
import ContentCollect from './ContentCollect';

function Content() {
  const catArr = [defaultCat, cryCat, sleepCat];

  const total = 1800;
  const [cat, setCat] = useState(catArr[0]);
  const [act, setAct] = useState('stay');
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const [num, setNum] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const collectArr = [1, 2, 3, 4];

  setMin(parseInt(countDown / 60 ));
  setSec(parseInt(countDown % 60 ));
  // setTimeout(() => {
  //   if (sec > 0) {
  //     // 초(sec)값이 0보다 크면 1씩 감소
  //     setSec(sec - 1);
  //   } else {
  //     // 초값이 0일 때
  //     if (min > 0) {
  //       // 분이 0보다 크면 1씩 감소하고 초를 59초로 세팅
  //       setMin(min - 1);
  //       setSec(59);
  //     } else {
  //       // 분이 0이면 카운트를 끝내고 act를 end로
  //       setCountDown('');
  //       setAct('end');
  //     }
  //   }
  //   console.log(sec);
  // }, 1000)

  useEffect(() => {
    // act가 run이면
    if (act === 'run') {
      // countDown의 값을 재할당
      //setTimeout( ()=> {
         // setCountDown(countDown !== 0 ? countDown - 1 : '' ); 
      //  }, 1000);
    }
  }, [act, countDown])


  const fnStart = () => {
    if(act === 'stay') {
      // 고양이 클릭하면 한번 울고 타이머 시작
      setAct('run');

      setCat(catArr[1]);
      setTimeout(() => {
        setCat(catArr[0]);
      }, 500);
      
      // 클릭시 기능 추가
      setCountDown(total);

    } else if (act === 'pause') {
      // 고양이가 자고 있을때 클릭하면 한번 울고 타이머 시작
      setAct('run');

      setCat(catArr[1]);
      setTimeout(() => {
        setCat(catArr[0]);
      }, 500);

      // setCountDown(
      //   setTimeout(() => {
      //     if (sec > 0) {
      //       // 초(sec)값이 0보다 크면 1씩 감소
      //       setSec(sec - 1);
      //     } else {
      //       // 초값이 0일 때
      //       if (min > 0) {
      //         // 분이 0보다 크면 1씩 감소하고 초를 59초로 세팅
      //         setMin(min - 1);
      //         setSec(59);
      //       } else {
      //         // 분이 0이면 카운트를 끝내고 act를 end로
      //         setCountDown('');
      //         setAct('end');
      //       }
      //     }
      //     console.log(sec);
      //   }, 1000)
      // )
    }
  };

  const fnDrag = () => {
    // 타이머 작동중일 때 고양이 쓰다듬으면 타이머 일시정지
    if(act === 'run') {
      setAct('pause');
      setCat(catArr[2]);
      setCountDown('');
    }
  }


  return (
    <section id="contentBox">
 
      <ContentCat />
      <ContentTimer />
      <ContentCollect />
      
    </section>
  )
}

export default Content
