import React from "react";
import styled from "styled-components";

import russia from './russia.png';
import armenia from './armenia.png';
import moldavia from './moldavia.png';
import month from './month.svg';

const Container = styled.div`
      background-color: #F8FCFF;
      padding-left: 6px;
      padding-right: 6px;
`;

const LogoBest = styled.div`
      padding-top: 68px;
      padding-bottom: 20px;
    
      display: flex;
      justify-content: center;
`;

const Month = styled.img`
      width: 60px;
      height: 60px;
`;

const Title = styled.h2``;

const Text = styled.span`
      display: block;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.3;
      color: black;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5;
        padding: 0 85px;
      }
`;

const Direction = styled.div`
      margin-top: 40px;
      display: flex;
      align-items: center;
`;

const Flag = styled.img`
      width: 30px;
      height: 30px;
      margin-right: 12px;
`;


const DirectionDesc = styled.div`
      display: flex;
      flex-direction: column;
`;

const DirCity = styled.p`
      color: #5b5b5c;
      font-size: 1.375rem;
      font-weight: 500;
      line-height: 1.45;
      margin: 0;
`;

const DirCountry = styled.p`
      color: #a0b0b9;
      font-size: 0.75rem;
      font-weight: 400;
      margin: 0;
      line-height: 1.65;
      text-transform: uppercase;
`;

const DirectionList = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 24px;
`;

const DirectionLine = styled.div`
      display: flex;
      justify-content: space-between;
      padding-bottom: 1rem;
`;

const DirFrom = styled.p`
      color: #4a4a4a;
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
      line-height: 1.25;
      
      @media screen and (min-width: 1024px) {
        padding-right: 50px;
      }
`;

const DirCost = styled.a`
      color: #00bae8;
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
      line-height: 1.25;
`;


const DirectionCard = styled.div`
      @media screen and (min-width: 1024px) {
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
        }
      }
`;

const DirectionMain = styled.div`
      @media screen and (min-width: 1024px) {
        display: flex;
        display: justify-content;
      }
`;

const AddText = styled.p`
      padding-top: 40px;
      color: #4a4a4a;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 1.5;
      text-align: center;
      width: 88%;
      margin: 0 auto;
      
      @media screen and (min-width: 1024px) {
        padding: 0 270px;
      }
`;

const OffertaText = styled.p`
      padding-top: 24px;
      color: #a0b0b9;
      font-size: 0.875rem;
      font-weight: 400;
      margin: 0;
      line-height: 1.4;
      text-align: center;
`;

export default () => {
    return (
        <Container>
            <LogoBest>
                <Month alt="logo" src={month} />
            </LogoBest>
            <Title>
                <Text>Лучшие цены на авиабилеты за последний месяц</Text>
            </Title>
            <div className="row">
                <div className="col-xl-offset-1">
                    <DirectionMain>
                        <DirectionCard>
                            <Direction>
                                <Flag alt="flag" src={russia} />
                                <DirectionDesc>
                                    <DirCity>Симферополь (Крым)</DirCity>
                                    <DirCountry>Крым</DirCountry>
                                </DirectionDesc>
                            </Direction>
                            <DirectionList>
                                <DirectionLine>
                                    <DirFrom>Из Москвы</DirFrom>
                                    <DirCost>от 4 813 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Санкт-Петербурга</DirFrom>
                                    <DirCost>от 7 857 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Новосибирска</DirFrom>
                                    <DirCost>от 15 127 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Екатеринбурга</DirFrom>
                                    <DirCost>от 9 275 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Челябинска</DirFrom>
                                    <DirCost>от 9 148 ₽</DirCost>
                                </DirectionLine>
                            </DirectionList>
                        </DirectionCard>
                        <DirectionCard>
                            <Direction>
                                <Flag alt="flag" src={armenia} />
                                <DirectionDesc>
                                    <DirCity>Ереван</DirCity>
                                    <DirCountry>Армения</DirCountry>
                                </DirectionDesc>
                            </Direction>
                            <DirectionList>
                                <DirectionLine>
                                    <DirFrom>Из Москвы</DirFrom>
                                    <DirCost>от 6 758 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Санкт-Петербурга</DirFrom>
                                    <DirCost>от 9 932 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Новосибирска</DirFrom>
                                    <DirCost>от 11 951 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Екатеринбурга</DirFrom>
                                    <DirCost>от 11 741 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Челябинска</DirFrom>
                                    <DirCost>от 11 956 ₽</DirCost>
                                </DirectionLine>
                            </DirectionList>
                        </DirectionCard>
                        <DirectionCard>
                            <Direction>
                                <Flag alt="flag" src={moldavia} />
                                <DirectionDesc>
                                    <DirCity>Кишинёв</DirCity>
                                    <DirCountry>Молдавия</DirCountry>
                                </DirectionDesc>
                            </Direction>
                            <DirectionList>
                                <DirectionLine>
                                    <DirFrom>Из Москвы</DirFrom>
                                    <DirCost>от 8 319 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Санкт-Петербурга</DirFrom>
                                    <DirCost>от 10 800 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Новосибирска</DirFrom>
                                    <DirCost>от 12 098 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Екатеринбурга</DirFrom>
                                    <DirCost>от 16 277 ₽</DirCost>
                                </DirectionLine>
                                <DirectionLine>
                                    <DirFrom>Из Челябинска</DirFrom>
                                    <DirCost>от 15 987 ₽</DirCost>
                                </DirectionLine>
                            </DirectionList>
                        </DirectionCard>
                    </DirectionMain>
                </div>
            </div>
            <AddText>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
                мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
                авиакомпаний.
            </AddText>
            <OffertaText>
                Цены, найденные пользователями за последние 48 часов, не являются
                офертой.
            </OffertaText>
        </Container>
    );
};
