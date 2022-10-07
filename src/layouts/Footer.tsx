import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding-top: 50px;
  padding-bottom: 20px;

  p {
    text-align: center;
    font-size: 10px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>© 2021. SA K</p>
    </StyledFooter>
  );
}

export default Footer;
