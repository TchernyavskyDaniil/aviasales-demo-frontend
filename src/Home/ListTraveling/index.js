import React from 'react';
import styled from 'styled-components';

import compas from './compass.svg'
import change from './pen.svg'
import world from './world.svg'
import sea from './palm.svg'
import shopping from './shopping.svg'
import history from './culture.svg'
import club from './night.svg'
import children from './child.svg'

const Section = styled.section`
      display: flex;
      flex-direction: column;
      background-color: #F8FCFF;
      padding-top: 40px;
      padding-left: 16px;
      padding-right: 16px;
`;

const TravelingHeader = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`;

const TravelingImg = styled.img`
      display: block;
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
`;

const TravelingText = styled.p`
      margin: 0;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: black;
`;

const TravelingChangeText = styled.p`
      margin: 0;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #00ACE2;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100px;
      justify-content: space-around;
`;

const ChangeImg = styled.img`
      width; 14px;
      height: 14px;
      display: block;
`;

const ListTraveling = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 30px;
`;

const ItemTraveling = styled.div`
      display: flex;
      flex-direction: row;
      min-height: 120px;
      width: 33%
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;

const TravelingImgContainer = styled.div`
      width: 48px; 
      height: 48px;
      display: block;
      position: relative;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 1px 3px 0 rgba(91,137,163,0.15);
`;

const TravelingItemText = styled.p`
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #00ACE2;
      width: 60%;
      
      &:active {
        color: #5C5C5C;
        border-bottom: 1px solid #00ACE2;
      }
`;

const TravelingItemImg = styled.img`
      width: 22px;
      height: 22px;
      background-color: #fff;
      border-radius: 16px;
      position: absolute;
      top: 13px;
      left: 13px;
`;

export default () => {
    return (
        <Section>
            <TravelingHeader>
                <TravelingImg alt='Compas' src={compas} />
                <TravelingText>
                    Популярные направления перелетов из города
                </TravelingText>
                <TravelingChangeText>
                    Москва
                    <ChangeImg alt='Change' src={change} />
                </TravelingChangeText>
            </TravelingHeader>
            <ListTraveling>
                <ItemTraveling>
                    <TravelingImgContainer>
                        <TravelingItemImg alt='World' src={world}/>
                    </TravelingImgContainer>
                    <TravelingItemText>
                        Куда угодно
                    </TravelingItemText>
                </ItemTraveling>
                <ItemTraveling>
                    <TravelingImgContainer>
                        <TravelingItemImg alt='Sea' src={sea}/>
                    </TravelingImgContainer>
                    <TravelingItemText>
                        Солнце и море
                    </TravelingItemText>
                </ItemTraveling>
                <ItemTraveling>
                    <TravelingImgContainer>
                        <TravelingItemImg alt='Shopping' src={shopping}/>
                    </TravelingImgContainer>
                    <TravelingItemText>
                        Шопинг, город
                    </TravelingItemText>
                </ItemTraveling>
                <ItemTraveling>
                    <TravelingImgContainer>
                        <TravelingItemImg alt='History' src={history}/>
                    </TravelingImgContainer>
                    <TravelingItemText>
                        Культура и история
                    </TravelingItemText>
                </ItemTraveling>
                <ItemTraveling>
                    <TravelingImgContainer>
                        <TravelingItemImg alt='Club' src={club}/>
                    </TravelingImgContainer>
                    <TravelingItemText>
                        Ночная жизнь
                    </TravelingItemText>
                </ItemTraveling>
                <ItemTraveling>
                    <TravelingImgContainer>
                        <TravelingItemImg alt='Children' src={children}/>
                    </TravelingImgContainer>
                    <TravelingItemText>
                        Отдых с детьми
                    </TravelingItemText>
                </ItemTraveling>
            </ListTraveling>
        </Section>
    )
}
