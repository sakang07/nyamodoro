import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ITEM_IMG } from '../constants/url';
import { COLOR } from '../constants/theme';

const CollectArea = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;

  h2 {
    position: relative;
    z-index: 1;
    width: 300px;
    height: 70px;
    margin: auto;
    padding-top: 20px;
    font-size: 18px;
    text-align: center;
    background-image: url('/assets/images/bar.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    .num {
      padding: 0 4px;
      font-size: 28px;
      color: ${COLOR.PRIMARY};
    }
  }

  .collect_inner {
    position: relative;
    z-index: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 150px;
    margin: auto;
    margin-top: -30px;
    padding: 40px 40px;
    background-image: url('/assets/images/paper_middle.png');
    background-size: 100% auto;
    background-position: 100%;
    background-repeat: repeat-y;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      z-index: -1;
      background-image: url('/assets/images/paper_bottom.png'),
        url('/assets/images/paper_bottom.png');
      background-size: 100% auto;
      background-position: top, bottom;
      background-repeat: no-repeat;
    }

    li {
      width: 50px;
      height: 50px;
      margin: 10px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

interface CycleCountProps {
  cycleNum: number;
}

function CycleCount(props: CycleCountProps) {
  const { cycleNum } = props;
  const randomItemArr = Object.values(ITEM_IMG);
  // const [items, setItems] = useState<string[]>([]);
  const [items, setItems] = useState<{ number: string }>({});
  let itemArr: string[] = [];

  const getItemArr = (items: { number: string }) => {
    const currentCycle = cycleNum;
    const randomNum = Number(Math.random() * randomItemArr.length);
    setItems({
      ...items,
      [currentCycle]: randomItemArr[randomNum],
      length: Object.values(items).length,
    });
    return Array.from(items);
  };

  useEffect(() => {
    itemArr = getItemArr(items);
    console.log(itemArr);
    console.log(`${cycleNum} 사이클 완료`);
  }, [cycleNum]);

  // useEffect(() => {
  //   const randomNum = Number(Math.random() * randomItemArr.length);
  //   setItems([...items, randomItemArr[randomNum]]);
  //   console.log(`${cycleNum} 사이클 완료`);
  // }, [cycleNum]);

  return (
    <CollectArea>
      <h2>
        고양이가 <span className="num">{cycleNum}</span>개 주워왔어요!
      </h2>
      <ul className="collect_inner">
        {itemArr.map((item, index) => (
          <li key={Object.keys(itemArr)[index]}>
            <span>
              {/* eslint-disable-next-line global-require */}
              <img src={item} alt="전리품" />
            </span>
          </li>
        ))}
      </ul>
    </CollectArea>
  );
}

export default CycleCount;
