import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

// src
import Routing, { RoutingProps } from './';
import { RootState } from 'store';

type OwnProps = {};

type StateProps = {};

type DispatchProps = {};

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {};
};

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): RoutingProps => {
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
)(Routing);
