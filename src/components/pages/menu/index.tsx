import React from 'react';
import styled from '@emotion/styled';
import { MenuItem } from 'store/menu/types';
import MenuItemCard from 'components/ui/cards/menu-item';

export const MenuPageWrapper = styled.div`
  .menu-bottom {
    .menu-btn {
      color: #562b00;
      background-color: transparent;
      border: 1px solid #562b00;
      padding: 10px 20px;
      border-radius: 35px;
      text-transform: uppercase;
      font-weight: 900;
      font-family: 'Monsterrat', sans-serif;
    }
  }
`;

export interface MenuPageProps {
  menuSections: MenuItem[];
}

const MenuPage: React.FC<MenuPageProps> = (props) => {
  const { menuSections } = props;

  return (
    <MenuPageWrapper className="MenuPage my-4 mx-4">
      <div className="row">
        {menuSections.map((section, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <MenuItemCard
                sectionId={section._id}
                img={section.cardImg}
                text={section.text}
              />
            </div>
          );
        })}
      </div>
      <div className="menu-bottom">
        <button className="menu-btn">En Espanol</button>
        <button className="menu-btn float-right">Have A Coupon?</button>
      </div>
    </MenuPageWrapper>
  );
};

export default MenuPage;
