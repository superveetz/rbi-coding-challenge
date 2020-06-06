import { RootState } from 'store';

// Menu carousel navigation
export const menuLoadingSelector = (state: RootState) =>
  state.menu.menu.loading;
export const menuErrorSelector = (state: RootState) => state.menu.menu.error;
export const menuItemsSelector = (state: RootState) => state.menu.menu.items;

// Menu carousel navigation
export const selectedSectionLoadingSelector = (state: RootState) =>
  state.menu.selectedSection.loading;
export const selectedSectionErrorSelector = (state: RootState) =>
  state.menu.selectedSection.error;
export const selectedSectionDetailsSelector = (state: RootState) =>
  state.menu.selectedSection.details;
export const selectedSectionMenuItemsSelector = (state: RootState) =>
  state.menu.selectedSection.menuItems;
