import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

// src
import MainNavBar, { MainNavBarProps } from './';
import { RootState } from 'store';
import * as menuTunks from 'store/menu/thunks';
import * as menuSelectors from 'store/menu/selectors';
import { MenuItem } from 'store/menu/types';

type OwnProps = {};

type StateProps = {
  menuCarouselNavigationItems: MenuItem[];
  menuCarouselNavigationItemsLoading: boolean;
};

type DispatchProps = {
  fetchMenuCarouselNavigationItems: () => void;
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    menuCarouselNavigationItems: menuSelectors.menuItemsSelector(state),
    menuCarouselNavigationItemsLoading: menuSelectors.menuLoadingSelector(
      state
    ),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    fetchMenuCarouselNavigationItems: () =>
      dispatch<any>(menuTunks.fetchMenuCarouselNavigationItems()),
  };
};

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): MainNavBarProps => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainNavBar);
