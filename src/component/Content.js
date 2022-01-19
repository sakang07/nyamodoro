// Content.js
// 220119

import React from 'react';

import '../style/Content.scss';
import defaultCat from '../img/cat_default.png';
// import cryCat from '../img/cat_cry.png';
// import sleepCat from '../img/cat_sleep.png';

function Content() {
  return (
    <section id="contentBox">
      <div className='container'>

        <div className='cat_area'>
          <h2 className='blind'>시간 알려주는 고양이</h2>
          <button type='button' className='default'><img src={defaultCat} alt='default cat' /></button>
        </div>

        <div className='timer_area'>
          <h2 className='blind'>타이머</h2>
          <p><span className='minute'>25</span> : <span className='second'>00</span></p>
        </div>

        <div className='collect_area'>
          <h2>고양이가 <span className='num'>0</span>개 주워왔어요!</h2>
          <ul className='collect_inner'>
            <li><span>물건 1</span></li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Content
