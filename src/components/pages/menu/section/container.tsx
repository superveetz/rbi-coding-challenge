import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

// src
import MenuSectionPage, { MenuSectionPageProps } from '.';
import { RootState } from 'store';
import * as menuThunks from 'store/menu/thunks';
import * as menuSelectors from 'store/menu/selectors';
import { SectionMenuItem } from 'store/menu/types';

type OwnProps = {};

type StateProps = {
  sectionMenuItems: SectionMenuItem[];
  fetchMenuSectionLoading: boolean;
};

type DispatchProps = {
  fetchMenuSection: (sectionId: string) => void;
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    sectionMenuItems: menuSelectors.selectedSectionMenuItemsSelector(state),
    fetchMenuSectionLoading: menuSelectors.selectedSectionLoadingSelector(
      state
    ),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    fetchMenuSection: (sectionId: string) =>
      dispatch<any>(menuThunks.fetchMenuSection(sectionId)),
  };
};

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): MenuSectionPageProps => {
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
)(MenuSectionPage);
