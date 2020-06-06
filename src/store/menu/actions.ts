import {
  MenuActionTypes,
  MenuActions,
  MenuItem,
  SectionMenuItem,
  SectionDetails,
} from './types';

export const menuItemsFetchStart = (): MenuActions => {
  return { type: MenuActionTypes.MENU_FETCH_START };
};
export const menuItemsFetchSuccess = (menuItems: MenuItem[]): MenuActions => {
  return {
    type: MenuActionTypes.MENU_FETCH_SUCCESS,
    items: menuItems,
  };
};
export const menuItemsFetchError = (error: object): MenuActions => {
  return {
    type: MenuActionTypes.MENU_FETCH_ERROR,
    error: error,
  };
};

export const menuSectionItemFetchStart = (): MenuActions => {
  return { type: MenuActionTypes.MENU_SECTION_ITEM_FETCH_START };
};
export const menuSectionItemFetchSuccess = (
  details: SectionDetails,
  menuItems: SectionMenuItem[]
): MenuActions => {
  return {
    type: MenuActionTypes.MENU_SECTION_ITEM_FETCH_SUCCESS,
    details,
    menuItems,
  };
};
export const menuSectionItemFetchError = (error: object): MenuActions => {
  return {
    type: MenuActionTypes.MENU_SECTION_ITEM_FETCH_ERROR,
    error: error,
  };
};
