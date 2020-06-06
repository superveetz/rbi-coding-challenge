import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import menuReducer from './menu/reducer';
import { MenuState } from './menu/types';
// import restaurantReducer from './restaurants/reducer'
// import { RestaurantState } from './restaurants/types'
// import reviewReducer from './reviews/reducer'
// import { ReviewState } from './reviews/types'
// import replyReducer from './replies/reducer'
// import { ReplyState } from './replies/types'
// import adminReducer from './admin/reducer'
// import { AdminState } from './admin/types'

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null;

/*
 * Root reducer of the app
 */
// The top-level state object
export interface ApplicationState {
  menu: MenuState;
}
export const RootReducer = combineReducers<ApplicationState>({
  menu: menuReducer,
});

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof RootReducer>;
export default store;
