import React from 'react';

function ContentCat() {
  return (
    <div className='cat_area'>
      <h2 className='blind'>시간 알려주는 고양이</h2>
      <button type='button' className='default' onClick={fnStart} onDrag={fnDrag}><img src={cat} className={act} alt='default cat' /></button>
    </div>
  )
}

export default ContentCat;
