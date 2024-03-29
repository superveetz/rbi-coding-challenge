import React from 'react';
import styled from '@emotion/styled';

// src
import GlobalStyle from 'components/global-styles';
import MainNavBar from 'components/navigation/main-navbar/container';
import Routing from 'components/navigation/_routing/container';
import Footer from 'components/navigation/footer';

const AppLayoutWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  padding-bottom: 240px;
`;

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayoutWrapper>
      <GlobalStyle />

      <MainNavBar />

      <Routing />

      <Footer />
    </AppLayoutWrapper>
  );
};

export default AppLayout;
