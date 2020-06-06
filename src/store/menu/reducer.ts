// import _ from 'lodash'

// src
import * as types from './types';

const initialState: types.MenuState = {
  menu: {
    items: [],
    loading: false,
    error: null,
  },
  selectedSection: {
    details: null,
    menuItems: [],
    loading: false,
    error: null,
  },
};

// Fetch carousel navigation
const carouselNavigationStart = (
  state: types.MenuState,
  action: types.MenuFetchStartAction
) => {
  return {
    ...state,
    menu: {
      items: [],
      loading: true,
      error: null,
    },
  };
};
const carouselNavigationSuccess = (
  state: types.MenuState,
  action: types.MenuFetchSuccessAction
) => {
  return {
    ...state,
    menu: {
      items: [...action.items],
      loading: false,
      error: null,
    },
  };
};
const carouselNavigationFail = (
  state: types.MenuState,
  action: types.MenuFetchErrorAction
) => {
  return {
    ...state,
    menu: {
      items: [],
      loading: false,
      error: action.error,
    },
  };
};

// Fetch menu section item
const sectionItemStart = (
  state: types.MenuState,
  action: types.MenuSectionItemFetchStartAction
) => {
  return {
    ...state,
    selectedSection: {
      details: null,
      menuItems: [],
      loading: true,
      error: null,
    },
  };
};

const sectionItemSuccess = (
  state: types.MenuState,
  action: types.MenuSectionItemFetchSuccessAction
) => {
  return {
    ...state,
    selectedSection: {
      details: action.details,
      menuItems: action.menuItems,
      loading: false,
      error: null,
    },
  };
};

const sectionItemFail = (
  state: types.MenuState,
  action: types.MenuSectionItemFetchErrorAction
) => {
  return {
    ...state,
    selectedSection: {
      details: null,
      menuItems: [],
      loading: false,
      error: action.error,
    },
  };
};

const reducer = (state = { ...initialState }, action: types.MenuActions) => {
  switch (action.type) {
    case types.MenuActionTypes.MENU_FETCH_START:
      return carouselNavigationStart(state, action);
    case types.MenuActionTypes.MENU_FETCH_SUCCESS:
      return carouselNavigationSuccess(state, action);
    case types.MenuActionTypes.MENU_FETCH_ERROR:
      return carouselNavigationFail(state, action);

    case types.MenuActionTypes.MENU_SECTION_ITEM_FETCH_START:
      return sectionItemStart(state, action);
    case types.MenuActionTypes.MENU_SECTION_ITEM_FETCH_SUCCESS:
      return sectionItemSuccess(state, action);
    case types.MenuActionTypes.MENU_SECTION_ITEM_FETCH_ERROR:
      return sectionItemFail(state, action);
    default:
      return state;
  }
};

export default reducer;
