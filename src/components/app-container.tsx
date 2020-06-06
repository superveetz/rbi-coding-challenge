import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

// src
import App, { AppProps } from './app';
import { RootState } from '../store';

type OwnProps = {};

type StateProps = {};

type DispatchProps = {};

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({});

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): AppProps => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
