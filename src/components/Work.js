import React from 'react';
import Home from './Home.js';
import {hot} from 'react-hot-loader';
import CustomModal from './Modal';
import styled from 'styled-components';

import {ModalTitle, ModalContent} from './styled/ModalComponents'
import KALWIcon from '../static/icons/kalw.png';
import KitchenSistersIcon from '../static/icons/kitchen-sisters.png';

const workItems = [
  {
    title: 'KALW',
    description: 'Selene did something with KALW',
    icon: KALWIcon,
  },
  {
    title: 'The Kitchen Sisters',
    description: 'Selene did something with The Kitchen Sisters',
    icon: KitchenSistersIcon,
  },
  {
    title: 'Women\'s Audio Mission',
    description: 'Selene did something with Women\'s Audio Mission',
    icon: '',
  },
  {
    title: 'Nonprofit',
    description: ' a NonProfit',
    icon: '',
  },
  {
    title: 'Ruse Laboratories',
    description: 'Selene did something with Ruse Laboratories',
    icon: '',
  },
  {
    title: 'Womyn in High Places',
    description: 'Selene did something with Womyn in High Places',
    icon: '',
  },
];

const WorkListItemWrapper = styled.div`
  display: flex;
  margin: 15px 20px;
`;

const WorkListItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkListItemIcon = styled.img`
  height: 50px;
  border-radius: 50%;
  margin-right: 25px;
`;

const WorkListItemTitle = styled.div`
  font-size: 20px;
`;

const WorkListItemDescription = styled.div`
  font-size: 15px;
`;

const WorkListItem = ({title, description, icon}) => {
  return (
    <WorkListItemWrapper>
      <WorkListItemIcon src={icon} />
      <WorkListItemText>
        <WorkListItemTitle>
          {title}
        </WorkListItemTitle>
        <WorkListItemDescription>
          {description}
        </WorkListItemDescription>
      </WorkListItemText>
    </WorkListItemWrapper>
  )
}

const Work = () => {
    return (
      <div>
        <Home />
        <CustomModal>
          <ModalContent>
            <ModalTitle>WORK</ModalTitle>
            {
              workItems.map(({title, description, icon}) => {
                return (<WorkListItem
                  key={title}
                  title={title}
                  description={description}
                  icon={icon}
                />);
              })
            }
          </ModalContent>
        </CustomModal>
      </div>
    );
}

export default hot(module)(Work);
