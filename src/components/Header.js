import React, { useState } from "react";
import "../style/Header.scss";

import onImg from "../assets/on.png";
import offImg from "../assets/off.png";

function Header() {
  const offBtn = { backgroundImage: `url('${offImg}')` };
  const onBtn = { backgroundImage: `url('${onImg}')` };

  const [isOn, setIsOn] = useState(false);

  const handleAuto = () => {
    if (!isOn) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  };

  return (
    <header id='headBox'>
      <h1 className='blind'>nyamodoro timer</h1>

      <div className='btn_area'>
        <button type='button' style={isOn ? onBtn : offBtn} onClick={handleAuto}>
          <span>자동 급식기</span>
        </button>
      </div>

      <div className='help_area'>
        <button type='button'>
          <span>도움말</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
