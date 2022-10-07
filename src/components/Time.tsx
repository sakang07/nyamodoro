import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../constants/theme';

const TimeArea = styled.div`
  margin: auto;
  margin-top: 20px;
  font-size: 60px;
  font-weight: bold;
  color: ${COLOR.WHITE};
  text-align: center;
  letter-spacing: 6px;
  word-spacing: -14px;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 2px 2px 0 ${COLOR.BLACK_02},
    -2px 2px 0 ${COLOR.BLACK_02}, 2px -2px 0 ${COLOR.BLACK_02},
    -2px -2px 0 ${COLOR.BLACK_02};
`;

interface TimeProps {
  isRest: boolean;
  minNum: number;
  secNum: number;
}

function Time(props: TimeProps) {
  const { isRest, minNum, secNum } = props;
  return (
    <TimeArea style={{ color: isRest ? 'lightgreen' : 'white' }}>
      <h2 className="blind">타이머</h2>
      <p>
        {minNum < 10 ? `0${minNum}` : minNum}&nbsp;:&nbsp;
        {secNum < 10 ? `0${secNum}` : secNum}
      </p>
    </TimeArea>
  );
}

export default Time;
