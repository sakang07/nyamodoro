import React from "react";
import "../style/Time.scss";

function Time(props) {
  return (
    <div className='timer_area'>
      <h2 className='blind'>타이머</h2>
      <p>
        {props.minNum < 10 ? `0${props.minNum}` : props.minNum}&nbsp;:&nbsp;
        {props.secNum < 10 ? `0${props.secNum}` : props.secNum}
      </p>
    </div>
  );
}

export default Time;
