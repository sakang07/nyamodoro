import React from 'react';

function ContentCollect() {

  return (
    <div className='collect_area'>
      <h2>고양이가 <span className='num'>{num}</span>개 주워왔어요!</h2>
      <ul className='collect_inner'>
        {collectArr.map((el, idx) => <li key={idx}><span>{`물건 ${idx}`}</span></li>)}
      </ul>
    </div>
  )
}

export default ContentCollect;
