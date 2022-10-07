import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { BUTTON_IMG } from '../constants/url';
import { COLOR } from '../constants/theme';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: auto;

    button {
      width: 100%;
      height: auto;
      margin: auto;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 0%;
    }
    span {
      display: block;
      width: auto;
      height: auto;
      min-width: 80px;
      padding-top: 50px;
      text-align: center;
      color: ${COLOR.BLACK_02};
      font-size: 16px;
    }
  }
`;

const HelpButton = styled.button`
  background-image: url('/assets/images/help.png');
`;

function Header() {
  const [isAutoOn, setIsAutoOn] = useState(false);
  const [isHelpOn, setIsHelpOn] = useState(false);

  const handleToggle = (
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <StyledHeader>
      <h1 className="blind">nyamodoro timer</h1>

      <div className="btn_area">
        <button
          type="button"
          style={{
            backgroundImage: isAutoOn
              ? `url(${BUTTON_IMG.ON})`
              : `url(${BUTTON_IMG.OFF})`,
          }}
          onClick={() => handleToggle(isAutoOn, setIsAutoOn)}
        >
          <span>자동 급식기</span>
        </button>
      </div>

      <div>
        <HelpButton
          type="button"
          onClick={() => handleToggle(isHelpOn, setIsHelpOn)}
        >
          <span>도움말</span>
        </HelpButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
