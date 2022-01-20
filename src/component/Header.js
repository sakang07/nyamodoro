// Header.js
// 220119

import React, {useState} from "react";

import '../style/Header.scss';
import onImg from '../img/on.png';
import offImg from '../img/off.png';


function Header() {

  const initialStyle = { backgroundImage: `url('${offImg}')` };
  const finalStyle = { backgroundImage: `url('${onImg}')` };
  
  const [feed, setFeed] = useState(initialStyle);
  const [act, setAct] = useState('off');

  const fnClick = () =>{
    if (act === 'off') {
      setAct('on');
      setFeed(finalStyle);
    } else {
      setAct('off');
      setFeed(initialStyle);
    }
  }


// const styleIn = { borderRadius :'0.5rem', border:'2px solid #777', backgroundImage:`url(on.png)`}
//   const [act, setAct] = useState('con_view');
//   const [mySt, setMySt] = useState(styleIn);

//   const fnAction = () => {
//     setAct( act === 'con_view' ? act + ' on' : 'con_view' );
//   }

//   const fnStyle = () => {
//     const stSet = mySt.backgroundImage.slice(4,-5) === 'on'  ? 
//                   {...styleIn, backgroundImage:`url(off.png)`} :
//                   {...styleIn}
//     setMySt( stSet )
//   }


//   return (
//     <div className="App">
//       <div id="viewBox">
//         <button type="button" onClick={fnStyle}>버튼</button>
//         <div className={act} style={mySt}></div>
//       </div>
//     </div>
//   );
  
  return (
    <header id='headBox'>
      <h1 className='blind'>nyamodoro timer</h1>
        
      <div className='btn_area'>
        <button type='button' style={feed} onClick={fnClick}><span>자동 급식기</span></button>
      </div>

      <div className='help_area'>
        <button type='button'><span>도움말</span></button>
      </div>

    </header>
  );
}


export default Header;