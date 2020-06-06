import React from 'react';
import { useParams } from 'react-router-dom';
import { SectionMenuItem } from 'store/menu/types';
import { usePrevious } from 'hooks';
import MenuItemCard from 'components/ui/cards/menu-item';
import { MenuPageWrapper } from '../index';

export interface MenuSectionPageProps {
  sectionMenuItems: SectionMenuItem[];
  fetchMenuSectionLoading: boolean;
  fetchMenuSection: (sectionId: string) => void;
}

const MenuSectionPage: React.FC<MenuSectionPageProps> = (props) => {
  const { sectionMenuItems, fetchMenuSectionLoading, fetchMenuSection } = props;
  const { sectionId } = useParams();

  // cdm
  React.useEffect(() => {
    if (!sectionId) {
      fetchMenuSection(sectionId);
    }
  }, [fetchMenuSection, sectionId]);

  // cdu
  const prevSectionId = usePrevious(sectionId);
  React.useEffect(() => {
    if (prevSectionId !== sectionId) {
      fetchMenuSection(sectionId);
    }
  }, [fetchMenuSection, prevSectionId, sectionId]);

  if (fetchMenuSectionLoading) return <span>LOADING...</span>;

  return (
    <MenuPageWrapper className="MenuSectionPage  my-4 mx-4">
      <div className="row">
        {sectionMenuItems.map((item, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <MenuItemCard
                sectionId={item._id}
                img={item.img}
                text={item.text}
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

export default MenuSectionPage;
