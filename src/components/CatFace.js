import React from "react";
import "../style/CatFace.scss";

function CatFace(props) {
  return (
    <div className='cat_area'>
      <h2 className='blind'>시간 알려주는 고양이</h2>
      <button type='button' className='default' onClick={props.onClick} onDrag={props.onDrag}>
        <img src={props.catState} alt='default cat' />
      </button>
    </div>
  );
}

export default CatFace;
