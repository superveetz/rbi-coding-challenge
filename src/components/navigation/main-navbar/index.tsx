import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

// src
import { MenuItem } from 'store/menu/types';

const carouselItemWidth = 140;
const MainNavBarWrapper = styled.nav`
  background-color: beige;
  width: 100%;
  padding-top: 20px;
  min-height: 100px;
`;

const MenuNavItemWrapper = styled.div`
  &.menu-nav-item-wrapper {
    &.active {
      & span.menu-nav-item-text {
        color: red;
        border-bottom: 6px solid red;
        border
      }
    }
    height: 100%;
    width: ${carouselItemWidth}px !important;
    text-align: center;
    margin-left: 25px;
    margin-right: 25px;
    &.main-menu {
      padding-top: 20px;
      width: 60px !important;
      & img.menu-nav-item-img {
        width: 60px;
        height: 60px;
      }
    }

    & span.menu-nav-item-text {
      padding-bottom: 10px;
      padding-top: 5px;
      display: inline-block;
      color: #562b00;
      font-weight: bold;
      font-family: 'Oswald', sans-serif;
      font-size: 14px;
      letter-spacing: -1px;
      white-space: pre;
    }

    & img.menu-nav-item-img {
      width: ${carouselItemWidth}px;
      height: 80px;
    }
  }
`;

export interface MainNavBarProps {
  menuCarouselNavigationItems: MenuItem[];
  menuCarouselNavigationItemsLoading: boolean;
  fetchMenuCarouselNavigationItems: () => void;
}

const MainNavBar: React.FC<MainNavBarProps> = (props) => {
  const {
    menuCarouselNavigationItems,
    menuCarouselNavigationItemsLoading,
    fetchMenuCarouselNavigationItems,
  } = props;
  const location = useLocation();
  const selectedSectionId = location.pathname.includes('/menu/section/')
    ? location.pathname.slice('/menu/section/'.length, location.pathname.length)
    : '';

  const settings = {
    className: 'center',
    centerPadding: '60px',
    speed: 500,
    initialSlide: 0,
    infinite: true,
    swipeToSlide: true,
    variableWidth: true,
    touchThreshold: 10,
  };
  React.useEffect(() => {
    fetchMenuCarouselNavigationItems();
  }, [fetchMenuCarouselNavigationItems]);

  const renderMenuCarouselItems = (): JSX.Element | null => {
    if (menuCarouselNavigationItemsLoading) return null;

    const menuCarouselItems = menuCarouselNavigationItems.map(
      (carouselNavItem, index) => {
        const menuActiveClass =
          selectedSectionId === carouselNavItem._id ? 'active' : '';

        return (
          <MenuNavItemWrapper
            key={index}
            className={`menu-nav-item-wrapper ${menuActiveClass}`}
          >
            <Link to={`/menu/section/${carouselNavItem._id}`}>
              <img
                className="menu-nav-item-img"
                src={`/images/${carouselNavItem.carouselImg}`}
                alt={carouselNavItem.text}
              />
              <span className="menu-nav-item-text">{carouselNavItem.text}</span>
            </Link>
          </MenuNavItemWrapper>
        );
      }
    );

    const menuActiveClass = location.pathname === '/menu' ? 'active' : '';
    return (
      <Slider {...settings}>
        <MenuNavItemWrapper
          className={`menu-nav-item-wrapper main-menu ${menuActiveClass}`}
        >
          <Link to="/menu">
            <img
              className="menu-nav-item-img"
              src={`/logo/bk-logo.png`}
              alt="BK Logo"
            />
            <span className="menu-nav-item-text">MENU</span>
          </Link>
        </MenuNavItemWrapper>
        {menuCarouselItems}
      </Slider>
    );
  };

  return (
    <MainNavBarWrapper className="MainNavBar">
      {renderMenuCarouselItems()}
    </MainNavBarWrapper>
  );
};

export default MainNavBar;
