import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

// src
import { RootState } from '../';
import {
  menuItemsFetchStart,
  menuItemsFetchSuccess,
  menuItemsFetchError,
  menuSectionItemFetchStart,
  menuSectionItemFetchSuccess,
  menuSectionItemFetchError,
} from './actions';
import * as api from '../../api';
import { MenuItem, SectionMenuItem, SectionDetails } from './types';

export const fetchMenuCarouselNavigationItems = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch(menuItemsFetchStart());

  // fetch menu data
  try {
    const [menu, sections] = await Promise.all([
      api.fetchMenu(),
      api.fetchSections(),
    ]);

    // transform sections into map
    const sectionsMap: Record<string, MenuItem> = {};
    for (let section of sections) {
      if (section?._id) {
        sectionsMap[section._id] = {
          _id: section._id,
          text: section?.name?.en,
          carouselImg: section?.carouselImage?.asset?._ref,
          cardImg: section?.image?.asset?._ref,
        };
      }
    }

    // lookup sections using menu
    const menuItems: MenuItem[] = [];
    for (let menuOption of menu?.options) {
      const menuItem = sectionsMap[menuOption?._ref];

      if (menuItem) {
        menuItems.push(menuItem);
      }
    }

    return dispatch(menuItemsFetchSuccess(menuItems));
  } catch (err) {
    return dispatch(menuItemsFetchError(err));
  }
};

export const fetchMenuSection = (
  sectionId: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(menuSectionItemFetchStart());

  // fetch menu data
  try {
    const [sections, sectionItems] = await Promise.all([
      api.fetchSections(),
      api.fetchItems(),
    ]);

    // find selected section in response
    const selectedSection = sections.find((sec: any) => sec?._id === sectionId);
    if (!selectedSection) {
      return dispatch(
        menuSectionItemFetchError({
          message: 'Could not find selected section in API response.',
        })
      );
    }

    // build map of section item options
    const sectionItemsMap: Record<string, any> = {};
    for (let option of selectedSection?.options) {
      if (option?._ref) {
        sectionItemsMap[option._ref] = option;
      }
    }

    // store itemm detail info for selected section
    const selectedSectionItems: SectionMenuItem[] = [];
    for (let item of sectionItems) {
      if (sectionItemsMap[item?._id]) {
        selectedSectionItems.push({
          _id: item._id,
          img: item?.image?.asset?._ref,
          text: item?.name?.en,
        });
      }
    }

    const sectionDetails: SectionDetails = {
      _id: selectedSection?._id,
      img: selectedSection?.image?.asset?._ref,
      text: selectedSection?.name?.en,
    };

    return dispatch(
      menuSectionItemFetchSuccess(sectionDetails, selectedSectionItems)
    );
  } catch (err) {
    return dispatch(menuSectionItemFetchError(err));
  }
};
