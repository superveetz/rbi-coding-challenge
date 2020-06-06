import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavBar from 'components/navigation/main-navbar/container';

// src
import MenuPage from 'components/pages/menu/container';
import MenuSectionPage from 'components/pages/menu/section/container';

export interface RoutingProps {}

const Routing: React.FC<RoutingProps> = (props) => {
  return (
    <div className="Routing">
      <MainNavBar />
      <Switch>
        <Route path="/menu" component={MenuPage} exact />
        <Route path="/menu/section/:sectionId" component={MenuSectionPage} />

        {<Redirect to="/menu" />}
      </Switch>
    </div>
  );
};

export default Routing;
