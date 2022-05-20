import React, { useState } from "react";
import "../style/Header.scss";

import onImg from "../assets/on.png";
import offImg from "../assets/off.png";

function Header() {
  const initialStyle = { backgroundImage: `url('${offImg}')` };
  const finalStyle = { backgroundImage: `url('${onImg}')` };

  const [feed, setFeed] = useState(initialStyle);
  const [act, setAct] = useState("off");

  const fnClick = () => {
    if (act === "off") {
      setAct("on");
      setFeed(finalStyle);
    } else {
      setAct("off");
      setFeed(initialStyle);
    }
  };

  return (
    <header id='headBox'>
      <h1 className='blind'>nyamodoro timer</h1>

      <div className='btn_area'>
        <button type='button' style={feed} onClick={fnClick}>
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
