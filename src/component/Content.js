// Content.js
// 220119

import React, { useState, useEffect } from 'react';

import '../style/Content.scss';
import defaultCat from '../img/cat_default.png';
import cryCat from '../img/cat_cry.png';
import sleepCat from '../img/cat_sleep.png';

function Content() {
  const catArr = [defaultCat, cryCat, sleepCat];

  const [cat, setCat] = useState(catArr[0]);
  const [act, setAct] = useState('stay');

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const [num, setNum] = useState(0);

  const collectArr = [1, 2, 3, 4];

  useEffect(() => {
    const countDown = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      } else {
        if (min === 0) clearInterval(countDown);
        else {
          setMin(min - 1);
          setSec(59);
        }
      }
      console.log(sec);
    }, 1000);
    return () => clearInterval(countDown);
  }, [sec, min])


  const fnStart = () => {
    if(act === 'stay') {
      // 고양이 클릭하면 한번 울고 타이머 시작
      setAct('run');

      setCat(catArr[1]);
      setTimeout(() => {
        setCat(catArr[0]);
      }, 500);
      
      // 클릭시 기능 추가
      setMin(30);

    } else if (act === 'pause') {
      // 고양이가 자고 있을때 클릭하면 한번 울고 타이머 시작
      setAct('run');

      setCat(catArr[1]);
      setTimeout(() => {
        setCat(catArr[0]);
      }, 500);
    }
  };

  const fnDrag = () => {
    // 타이머 작동중일 때 고양이 쓰다듬으면 타이머 일시정지
    if(act === 'run') {
      setAct('pause');
      setCat(catArr[2]);
      // clearInterval(countDown);
    }
  }


  return (
    <section id="contentBox">
      <div className='cat_area'>
        <h2 className='blind'>시간 알려주는 고양이</h2>
        <button type='button' className='default' onClick={fnStart} onDrag={fnDrag}><img src={cat} className={act} alt='default cat' /></button>
      </div>

      <div className='timer_area'>
        <h2 className='blind'>타이머</h2>
        <p>{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</p>
      </div>

      <div className='collect_area'>
        <h2>고양이가 <span className='num'>{num}</span>개 주워왔어요!</h2>
        <ul className='collect_inner'>
          {collectArr.map((el, idx) => <li key={idx}><span>{`물건 ${idx}`}</span></li>)}
        </ul>
      </div>
    </section>
  )
}

export default Content
