import React from 'react';

function ContentTimer() {
  return (
    <div className='timer_area'>
      <h2 className='blind'>타이머</h2>
      <p>{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</p>
    </div>
  )
}

export default ContentTimer;
