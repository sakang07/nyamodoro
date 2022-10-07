import React from 'react';
import styled from 'styled-components';
import Header from './layouts/Header';
import Content from './components/Content';
import Footer from './layouts/Footer';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d8dce1;
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  margin: auto;
  padding: 20px 14px;
`;

function App() {
  return (
    <StyledApp>
      <StyledContainer>
        <Header />
        <Content />
        <Footer />
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
