import React from "react";
import "../style/CatFace.scss";

import handCursor from "../assets/hand.png";

function CatFace(props) {
  const handleOnDragStart = e => {
    const img = document.createElement("img");
    img.src = handCursor;
    e.dataTransfer.setDragImage(img, 50, 25);
  };

  return (
    <div className='cat_area'>
      <h2 className='blind'>시간 알려주는 고양이</h2>
      <button
        type='button'
        className='default'
        onClick={props.onClick}
        onDragStart={handleOnDragStart}
        onDragEnd={props.onDrag}
      >
        <img
          src={props.catFaceState}
          style={{ cursor: props.timerState ? `url("${handCursor}"), grab` : "pointer" }}
          alt='cat'
        />
      </button>
    </div>
  );
}

export default CatFace;
