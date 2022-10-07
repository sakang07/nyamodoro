import React, { DragEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { CURSOR_IMG } from '../constants/url';

const CatArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: auto;
  margin: auto;
  margin-top: 60px;

  & img {
    width: 100%;
    height: 170px;
    // -webkit-user-drag: none;
  }
`;

interface CatFaceProps {
  timerIsRun: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onDragEnd: DragEventHandler<HTMLButtonElement> | undefined;
  catFaceState: string;
}

function CatFace(props: CatFaceProps) {
  const { timerIsRun, onClick, onDragEnd, catFaceState } = props;

  const handCursor = { cursor: `url('${CURSOR_IMG.HAND}'), grab` };
  const fishCursor = { cursor: `url('${CURSOR_IMG.FISH}'), pointer` };

  // 드래그시 따라오는 고스트 이미지 변경
  const handleOnDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
    const img = document.createElement('img');
    img.src = CURSOR_IMG.HAND;
    event.dataTransfer.setDragImage(img, 0, 0);
  };

  return (
    <CatArea>
      <h2 className="blind">시간 알려주는 고양이</h2>
      <button
        type="button"
        className="default"
        style={timerIsRun ? handCursor : fishCursor}
        onClick={onClick}
        onDragStart={handleOnDragStart}
        onDragEnd={onDragEnd}
      >
        <img src={catFaceState} alt="cat" />
      </button>
    </CatArea>
  );
}

export default CatFace;
