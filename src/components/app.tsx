import React from 'react';
import styled from '@emotion/styled';

// src
import AppLayout from 'components/layout';

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;
export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  return (
    <AppWrapper className="App">
      <AppLayout />
    </AppWrapper>
  );
};

export default App;
