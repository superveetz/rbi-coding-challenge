import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MenuItemCardWrapper = styled.div`
  &.card {
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .crop {
    height: 280px;
    /*width: 400px;*/
    overflow: hidden;
  }
  .card-img-top {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .card-body {
    position: relative;
  }

  .card-text {
    margin: 0;
    font-size: 28px;
    color: #562b00;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    max-width: 85%;
    min-height: 82px;
  }

  .card-button-wrap {
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 40px;
    width: 40px;
    .btn {
      border-radius: 50%;
      background-color: #562b00;
      width: 100%;
      height: 100%;

      i {
        color: white;
      }
    }
  }
`;

interface MenuItemCardProps {
  img: string;
  text: string;
  sectionId: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = (props) => {
  const { img, text, sectionId } = props;
  return (
    <MenuItemCardWrapper className="card box-shadow">
      <div className="crop">
        <img className="card-img-top" src={`/images/${img}`} alt={text} />
      </div>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <div className="card-button-wrap">
          <Link to={`/menu/section/${sectionId}`} className="btn">
            <i className="fas fa-fw fa-chevron-right d-inline" />
          </Link>
        </div>
      </div>
    </MenuItemCardWrapper>
  );
};

export default MenuItemCard;
