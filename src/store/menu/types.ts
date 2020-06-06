export interface MenuState {
  menu: {
    items: MenuItem[];
    loading: boolean;
    error: object | null;
  };
  selectedSection: {
    details: SectionDetails | null;
    menuItems: SectionMenuItem[];
    loading: boolean;
    error: object | null;
  };
}

export interface MenuItem {
  _id: string;
  carouselImg: string;
  cardImg: string;
  text: string;
}

export interface SectionDetails {
  _id: string;
  img: string;
  text: string;
}

export interface SectionMenuItem {
  _id: string;
  img: string;
  text: string;
}

export enum MenuActionTypes {
  MENU_FETCH_START = 'MENU_FETCH_START',
  MENU_FETCH_SUCCESS = 'MENU_FETCH_SUCCESS',
  MENU_FETCH_ERROR = 'MENU_FETCH_ERROR',

  MENU_SECTION_ITEM_FETCH_START = 'MENU_SECTION_ITEM_FETCH_START',
  MENU_SECTION_ITEM_FETCH_SUCCESS = 'MENU_SECTION_ITEM_FETCH_SUCCESS',
  MENU_SECTION_ITEM_FETCH_ERROR = 'MENU_SECTION_ITEM_FETCH_ERROR',
}

// Actions
export interface MenuFetchStartAction {
  type: typeof MenuActionTypes.MENU_FETCH_START;
}
export interface MenuFetchSuccessAction {
  type: typeof MenuActionTypes.MENU_FETCH_SUCCESS;
  items: MenuItem[];
}
export interface MenuFetchErrorAction {
  type: typeof MenuActionTypes.MENU_FETCH_ERROR;
  error: object;
}

export interface MenuSectionItemFetchStartAction {
  type: typeof MenuActionTypes.MENU_SECTION_ITEM_FETCH_START;
}
export interface MenuSectionItemFetchSuccessAction {
  type: typeof MenuActionTypes.MENU_SECTION_ITEM_FETCH_SUCCESS;
  details: SectionDetails;
  menuItems: SectionMenuItem[];
}
export interface MenuSectionItemFetchErrorAction {
  type: typeof MenuActionTypes.MENU_SECTION_ITEM_FETCH_ERROR;
  error: object;
}

export type MenuActions =
  | MenuFetchStartAction
  | MenuFetchSuccessAction
  | MenuFetchErrorAction
  | MenuSectionItemFetchStartAction
  | MenuSectionItemFetchErrorAction
  | MenuSectionItemFetchSuccessAction;
