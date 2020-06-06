import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

// src
import MenuPage, { MenuPageProps } from '.';
import { RootState } from 'store';
import * as menuSelectors from 'store/menu/selectors';
import { MenuItem } from 'store/menu/types';

type OwnProps = {};

type StateProps = {
  menuSections: MenuItem[];
};

type DispatchProps = {};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    menuSections: menuSelectors.menuItemsSelector(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {};
};

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): MenuPageProps => {
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
)(MenuPage);
