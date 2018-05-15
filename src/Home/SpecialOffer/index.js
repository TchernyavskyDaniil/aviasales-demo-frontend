import React from 'react';
import styled from 'styled-components';

import pobeda from "./pobeda.png";
import luft from "./luft.png";
import icon from "./icon.svg";

const SpecialOffer = styled.div`
      margin-top: 40px;
      background-color: #00b0de;
      background: linear;
      background: linear-gradient(#00b0de 0%, #196ebd 100%);
`;

const TitleSpecialOffer = styled.h2`
      padding-top: 16px;
      padding-bottom: 24px;
      color: #fff;
      font-size: 28px;
      font-weight: 400;
      margin: 0;
      line-height: 33px;
      text-align: left;
      width: 80%;
`;

const Content = styled.div`
      @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: nowrap;
      }
`;

const Card = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
      min-height: 270px;
      background-color: #fff;
      
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
        margin-right: 16px;
        
        &:last-child {
          margin-right: 0;
        }
      }
      
      @media screen and (min-width: 1024px) {
        margin-right: 68px;
        
        &:last-child {
          margin-right: 0;
        }
      }
`;

const HeaderCard = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 22px 16px 21px 16px;
      background-color: #cd2027;
      position: relative;
`;

const TitleCard = styled.p`
      margin: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
`;

const MainCard = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      padding-top: 20px;
      min-height: 207px;
`;

const CardUp = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 0 8px;
      padding-bottom: 24px;
`;

const Logo = styled.img`
      height: 30px;
      width: 122px;
      
      @media screen and (min-width: 768px) {
        width: 100px;
        height: 25px;
      }
`;

const CardInfo = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
`;

const CostCard = styled.div`
      color: #5c5c5c;
      text-align: right;
      display: flex;
      flex-direction: row;
      min-height: 16px;
      margin-bottom: 10px;
`;

const TextCard = styled.p`
      margin: 0;
      padding: 0;
      color: #5c5c5c;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding-right: 4px;  
`;

const PriceCard = styled.p`
      margin: 0;
      margin: 0
      color: #5c5c5c;
      font-size: 20px;
      line-height: 16px;
      text-align: right;
`;

const DayCard = styled.p`
      margin: 0;
      color: #d93633;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 15px;
`;

const AdsCard = styled.p`
      margin: 0;
      padding: 0;
      color: #242424;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding: 0 8px;
`;

const ButtonCard = styled.button`
      border: 2px solid #cd1f27;
      margin: 40px 8px 16px 8px;
      color: #d93533;
      background-color: #fff;
      padding: 10px 0;
`;

const Icon = styled.img`
      width: 38px;
      height: 38px;
      position: absolute;
      right: 16px;
`;

const ContentInfo = styled.div`
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 24px;
      }
`;

const LinkAllOffer = styled.a`
      display: block;
      text-align: center;
      text-decoration: underline;
      padding-top: 32px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 20px;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        padding-top: 0;
      }
`;

const Text = styled.p`
      margin: 0;
      display: block;
      text-align: center;
      padding-top: 8px;
      padding-bottom: 24px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 20px;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        padding: 0;
      }
`;

export default () => {
    return (
        <SpecialOffer>
            <div className="container">
                <TitleSpecialOffer>
                    Спецпредложения на авиабилеты
                </TitleSpecialOffer>
                <Content>
                    <Card>
                        <HeaderCard>
                            <TitleCard>
                                Билеты от 499 рублей!
                            </TitleCard>
                        </HeaderCard>
                        <MainCard>
                            <CardUp>
                                <Logo alt="pobeda" src={pobeda} />
                                <CardInfo>
                                    <CostCard>
                                        <TextCard>
                                            от
                                        </TextCard>
                                        <PriceCard>
                                            499 ₽
                                        </PriceCard>
                                    </CostCard>
                                    <DayCard>
                                        Осталость 45 дней
                                    </DayCard>
                                </CardInfo>
                            </CardUp>
                            <AdsCard>
                                Билеты от 499 рублей!
                            </AdsCard>
                            <AdsCard>
                                Специальное предложение от авиакомпании Победа
                            </AdsCard>
                            <ButtonCard>
                                Узнать подробности
                            </ButtonCard>
                        </MainCard>
                    </Card>
                    <Card>
                        <HeaderCard>
                            <TitleCard>
                                В Нью-Йорк от 20 680 ₽
                            </TitleCard>
                            <Icon alt="icon" src={icon} />
                        </HeaderCard>
                        <MainCard>
                            <CardUp>
                                <Logo alt="luft" src={luft} />
                                <CardInfo>
                                    <CostCard>
                                        <TextCard>
                                            от
                                        </TextCard>
                                        <PriceCard>
                                            20 680 ₽
                                        </PriceCard>
                                    </CostCard>
                                    <DayCard>
                                        Осталость 19 дней
                                    </DayCard>
                                </CardInfo>
                            </CardUp>
                            <AdsCard>
                                Из Москвы В США от 20680 рублей! Специальное предложение от
                                авиакомпании Lufthansa
                            </AdsCard>
                            <ButtonCard>
                                Узнать подробности
                            </ButtonCard>
                        </MainCard>
                    </Card>
                    <Card>
                        <HeaderCard>
                            <TitleCard>
                                В Лос-Анджелес от...
                            </TitleCard>
                            <Icon alt="icon" src={icon} />
                        </HeaderCard>
                        <MainCard>
                            <CardUp>
                                <Logo alt="luft" src={luft} />
                                <CardInfo>
                                    <CostCard>
                                        <TextCard>
                                            от
                                        </TextCard>
                                        <PriceCard>
                                            20 350 ₽
                                        </PriceCard>
                                    </CostCard>
                                    <DayCard>
                                        Осталость 19 дней
                                    </DayCard>
                                </CardInfo>
                            </CardUp>
                            <AdsCard>
                                Из Москвы В США от 22360 рублей! Специальное предложение от
                                авиакомпании Lufthansa
                            </AdsCard>
                            <ButtonCard>
                                Узнать подробности
                            </ButtonCard>
                        </MainCard>
                    </Card>
                </Content>
                <ContentInfo>
                    <LinkAllOffer>
                        Смотреть все спецпредложения
                    </LinkAllOffer>
                    <Text>
                        * средняя цена по направлению
                    </Text>
                </ContentInfo>
            </div>
        </SpecialOffer>
    )
}
