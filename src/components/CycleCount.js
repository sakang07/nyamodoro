import React from "react";
import { useEffect, useState } from "react";
import "../style/CycleCount.scss";

import birdImg from "../assets/bird.png";
import butterflyImg from "../assets/butterfly.png";
import canImg from "../assets/can.png";
import smallfishImg from "../assets/small_fish.png";
import flowerImg from "../assets/flower.png";
import moneyImg from "../assets/money.png";
import mouseImg from "../assets/mouse.png";
import tomatoImg from "../assets/tomato.png";

function CycleCount(props) {
  const [itemArr, setItemArr] = useState([]);
  const randomItemArr = [
    birdImg,
    butterflyImg,
    canImg,
    smallfishImg,
    flowerImg,
    moneyImg,
    mouseImg,
    tomatoImg,
  ];

  useEffect(() => {
    const randomNum = parseInt(Math.random() * randomItemArr.length);

    if (props.cycleNum > 0) {
      console.log(props.cycleNum + "사이클 완료");
      setItemArr([randomItemArr[randomNum], ...itemArr]);
      // 아이템 추가되는 순서 역순으로 추가되게 구현할차례
    }
  }, [props.cycleNum]);

  return (
    <div className='collect_area'>
      <h2>
        고양이가 <span className='num'>{props.cycleNum}</span>개 주워왔어요!
      </h2>
      <ul className='collect_inner'>
        {itemArr.map((el, idx) => (
          <li key={idx}>
            <span>
              <img src={el} alt='전리품' />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CycleCount;
