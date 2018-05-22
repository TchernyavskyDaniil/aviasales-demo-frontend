import React from "react";
import styled from "styled-components";

import calendarLogo from "./calen.svg";
import flagMoldova from "./flag-md.png";
import flagRu from "../Photos/flag-ru.png";
import flagArmenia from "./flag-ar.png";

const Wrapper = styled.div`
      background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
      padding: 30px 0;
      
      @media screen and (min-width: 768px) {
        padding-left: 65px;
        padding-right: 65px;
      }
      
      @media screen and (min-width: 1024px) {
        padding-left: 140px;
        padding-right: 140px;
      }
`;

const Top = styled.div`
      text-align: center;
`;

const Calendar = styled.img``;

const Title = styled.h2`
      font-weight: 500;
      line-height: 24px;
      font-size: 18px;
      color: #4a4a4a;
      margin: 20px 0 40px 0;
    
      @media screen and (min-width: 768px) {
        font-size: 24px;
      }
`;

const Directions = styled.div`
      @media screen and (min-width: 1024px) {
        display: flex;
      }
`;

const Destination = styled.div`
      border-bottom: 1px dashed #e4e7e8;
      padding-bottom: 23px;
      margin: 0 auto 40px;
      
      &:last-child {
        border-bottom: none;
      }
    
      @media screen and (min-width: 1024px) {
        padding-bottom: 0;
        border: none;
        border-right: 1px dashed #e4e7e8;
        padding-right: 10px;
        flex-basis: 33%;
        margin: 0 18px 18px 0;
        &:last-child {
          border: none;
        }
      }
`;

const Heading = styled.div`
      margin-bottom: 20px;
      padding-left: 7px;
`;

const Flag = styled.div`
      display: inline-block;
      margin-right: 12px;
      margin-top: 5px;
`;

const FlagRu = styled.img`
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const FlagAr = styled.img`
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const FlagMd = styled.img`
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const DestinationTitle = styled.div`
      vertical-align: top;
      display: inline-block;
      line-height: 1.5;
      font-weight: normal;
`;

const City = styled.strong`
      font-weight: 600;
      font-size: 22px;
      color: #5b5b5c;
      margin: 0;
`;

const RouteLink = styled.a`
      color: #4a4a4a;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.8125rem;
      text-decoration: none;
      flex: 1;
    
      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
`;

const Country = styled.div`
      margin: 0;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #a0b0b9;
`;

const Routes = styled.div``;

const Route = styled.div`
      color: inherit;
      font-size: 0.875rem;
      overflow: hidden;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      overflow: hidden;
      padding: 5px 8px;
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
      align-items: center;
      cursor: pointer;
      
      &:hover {
        background-color: #f1fcff;
        ${RouteLink} {
          color: #ff9d1b;
          text-decoration: underline;
        }
      }
`;

const Price = styled.a`
      padding-left: 10px;
      color: #00ace2;
      white-space: nowrap;
      transition: all 0.3s ease;
      &:hover {
        color: #ff9d1b;
      }
    
      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
`;

const Currency = styled.span`
      font-weight: normal;
`;

const Notes = styled.div`
      text-align: center;
      max-width: 680px;
      margin: 40px auto 0;
`;

const Text = styled.p`
      margin-bottom: 25px;
`;

const SmallText = styled.p`
      color: #9ab0b9;
      font-size: 14px;
`;

export default () => {
  return (
    <Wrapper>
      <div className="container">
        <Top>
          <Calendar src={calendarLogo} alt="Лучшие цены" />
          <Title>
              Лучшие цены на авиабилеты за последний месяц
          </Title>
        </Top>
        <Directions>
          <Destination>
            <Heading>
              <Flag>
                <FlagRu src={flagRu} alt="RU" />
              </Flag>
              <DestinationTitle>
                <City>Симферополь (Крым)</City>
                <Country>Крым</Country>
              </DestinationTitle>
            </Heading>
            <Routes>
              <Route>
                <RouteLink>Из Москвы</RouteLink>
                <Price> от 4 868 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Новосибирска</RouteLink>
                <Price>
                  от 7 857 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Санкт-Петербурга</RouteLink>
                <Price>
                  от 15 127 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Челябинска</RouteLink>
                <Price>
                  от 9 275 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Екатеринбурга</RouteLink>
                <Price>
                  от 4 868 <Currency>₽</Currency>
                </Price>
              </Route>
            </Routes>
          </Destination>
          <Destination>
            <Heading>
              <Flag>
                <FlagAr src={flagArmenia} alt="Armenia" />
              </Flag>
              <DestinationTitle>
                <City>Ереван</City>
                <Country>Армения</Country>
              </DestinationTitle>
            </Heading>
            <Routes>
              <Route>
                <RouteLink>Из Москвы</RouteLink>
                <Price>
                  от 6 758 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Санкт-Петербурга</RouteLink>
                <Price>
                  от 9 932 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Сочи</RouteLink>
                <Price>
                  от 11 868 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Краснодара</RouteLink>
                <Price>
                  от 11 741 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Ростова-на-Дону</RouteLink>
                <Price>
                  от 11 956 <Currency>₽</Currency>
                </Price>
              </Route>
            </Routes>
          </Destination>
          <Destination>
            <Heading>
              <Flag>
                <FlagMd src={flagMoldova} alt="Moldova" />
              </Flag>
              <DestinationTitle>
                <City>Кишинёв</City>
                <Country>Молдавия</Country>
              </DestinationTitle>
            </Heading>
            <Routes>
              <Route>
                <RouteLink>Из Москвы</RouteLink>
                <Price>
                  от 8 319 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Санкт-Петербурга</RouteLink>
                <Price>
                  от 10 800 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Краснодара</RouteLink>
                <Price>
                  от 12 098 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Сургута</RouteLink>
                <Price>
                  от 16 277 <Currency>₽</Currency>
                </Price>
              </Route>
              <Route>
                <RouteLink>Из Нового Уренгоя</RouteLink>
                <Price>
                  от 15 987 <Currency>₽</Currency>
                </Price>
              </Route>
            </Routes>
          </Destination>
        </Directions>
        <Notes>
          <Text>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
            и 728 авиакомпаний.
          </Text>
          <SmallText>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </SmallText>
        </Notes>
      </div>
    </Wrapper>
  );
}
