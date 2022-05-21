import React from "react";
import "../style/CatFace.scss";

import handImg from "../assets/hand.png";
import fishImg from "../assets/fish.png";

function CatFace(props) {
  const handCursor = { cursor: `url('${handImg}'), grab` };
  const fishCursor = { cursor: `url('${fishImg}'), pointer` };

  // 드래그시 따라오는 고스트 이미지 변경
  const handleOnDragStart = e => {
    const img = document.createElement("img");
    img.src = handImg;
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  return (
    <div className='cat_area'>
      <h2 className='blind'>시간 알려주는 고양이</h2>
      <button
        type='button'
        className='default'
        style={props.timerIsRun ? handCursor : fishCursor}
        onClick={props.onClick}
        onDragStart={handleOnDragStart}
        onDragEnd={props.onDragEnd}
      >
        <img src={props.catFaceState} alt='cat' />
      </button>
    </div>
  );
}

export default CatFace;
