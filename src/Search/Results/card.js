import React from 'react';
import styled from 'styled-components';

import airbusIcon from './airbus.svg';
import timeIcon from './time.svg';
import smile from './smile.png';
import lovelySmile from './lovely-smile.png';
import lightning from './lightning.png';
import suitcase from './suitcase.svg';
import bag from './bag.svg';
import noBag from './no-bag.svg';
import share from './share.svg';
import pin from './pin.svg';
import plane from './plane.svg';

import { CardsData, citiesId, airportId } from './data';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

const Opener = styled.button`
      border: none;
      background: none;
      position: absolute;
      cursor: pointer;
      display: none;
      right: 0;
      top: 0;
      bottom: 0;
      width: 20px;
      border-left: 1px solid #edf5f7;
      background: #edf5f7;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: all 0.3s;
      z-index: 2;
      
      @media (min-width: 768px) {
        display: block;
      }
      
      &:hover {
        background: #ecf9fb;
        border-color: #ecf9fb;
        &:after {
          border-top: 5px solid #00aedb;
        }
      }
      
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -5px;
        right: 5px;
        width: 0;
        height: 0;
        border-top: 5px solid #abbdc1;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        transition: all 0.3s;
      }
`;

const Card = styled.div`
      margin-bottom: 10px;
      position: relative;
      
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
      }
`;

const Left = styled.div`
      border-right: 1px solid #dddddd;
      display: none;
      flex-direction: column;
      align-items: center;
      padding: 0;
      background: #fff;
      flex-basis: 30%;
      
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        max-width: 200px;
      }
`;

const Buy = styled.button`
      display: none;
      border: none;
      background: #ff6d00;
      border-radius: 4px;
      text-align: center;
      font-weight: bold;
      line-height: 1.5;
      color: #fff;
      min-width: 160px;
      padding: 6px 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 10px 0;
      &:hover {
        background: #ffa353;
      }
      
      @media (min-width: 768px) {
        display: block;
      }
      
      @media (min-width: 1024px) {
        margin: 10px;
      }
`;

const Things = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
`;

const BaggagePrice = styled.span`
      color: #66d295;
      font-size: 10px;
      text-align: center;
`;

const BaggageChoice = styled.button`
      border: none;
      background: none;
      display: flex;
      cursor: pointer;
      flex-basis: 50%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding-bottom: 5px;
      align-self: baseline;
`;

const HandBag = styled.span`
      font-weight: bold;
      line-height: normal;
      font-size: 10px;
      text-align: center;
      color: #9ab0b9;
      padding: 10px 7px;
      background-image: url(${suitcase});
      background-repeat: no-repeat;
      background-position: center;
      background-position-y: 3px;
`;

const Luggage = HandBag.extend`
      background-image: url(${bag});
`;

const NoBag = HandBag.extend`
      background-image: url(${noBag});
      padding: 15px 10px;
`;

const BuyPrice = styled.span`
      font-weight: normal;
      display: block;
`;

const Title = styled.h3`
      font-style: normal;
      font-weight: 900;
      color: #fff;
      font-size: 14px;
      display: block;
      padding: 10px 6px;
      position: relative;
      
      @media (min-width: 768px) {
        display: none;
      }
      
      &:after {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
      }
`;

const TitleGreen = Title.extend`
      background: #83d40b;
      margin: 0;
      
      &:after {
        background-image: url(${smile});
        width: 14px;
        height: 20px;
        left: 125px;
        top: 10px;
      }
`;

const TitleBrown = Title.extend`
      background: #af7542;
      margin: 0;
      
      &:after {
        background-image: url(${lightning});
        width: 14px;
        height: 20px;
        left: 125px;
        top: 10px;
      }
`;

const TitlePurple = Title.extend`
      background: #c279d1;
      margin: 0;
      
      &:after {
        background-image: url(${lovelySmile});
        width: 14px;
        height: 20px;
        left: 105px;
        top: 10px;
      }
`;

const Site = styled.span`
      font-size: 12px;
      text-align: center;
      color: #a0b0b9;
`;

const Content = styled.div`
      background-color: #fff;
      padding: 16px 6px;
      
      @media (min-width: 768px) {
        flex-grow: 1;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        padding: 10px 30px 10px 16px;
      }
`;
const Top = styled.div`
      flex-direction: row-reverse;
      align-items: center;
      margin-bottom: 10px;
      justify-content: space-between;
      display: flex;
      
      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
`;

const Price = styled.div`
      font-weight: bold;
      font-size: 22px;
      color: #ff9241;
      
      @media (min-width: 768px) {
        display: none;
      }
`;

const Share = styled.button`
      width: 17px;
      border: none;
      background: none;
      height: 14px;
      cursor: pointer;
      background-image: url(${share});
      background-repeat: no-repeat;
`;

const TicketSharing = styled.div`
      display: none;
      flex-direction: row;
      flex-direction: row;
      flex-basis: 18%;
      justify-content: space-between;
      align-items: center;
      
      @media (min-width: 768px) {
        display: flex;
      }
`;

const Charter = styled.span`
      font-size: 10px;
      color: #23a9f6;
      padding: 6px 12px;
      border: 1px solid #2196f3;
      border-radius: 15px;
      display: none;
      text-transform: uppercase;
      
      @media (min-width: 768px) {
        display: block;
        margin-right: 5px;
      }
`;
const Currency = styled.span``;

const Logo = styled.div``;

const LogoImage = styled.img``;

const LogoSmall = styled.img`
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 4px;
      &:first-child {
        margin-right: 12px;
      }
`;

const Type = styled.p`
      text-align: right;
      flex-basis: 25%;
      flex-grow: 1;
      margin: 0;
`;

const Bottom = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 14px;
      
      @media (min-width: 768px) {
        display: none;
      }
`;
const BottomDesktop = styled.div`
      display: none;
      
      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
      }
`;

const Time = styled.div`
      flex-basis: 40%;
      padding-left: 20px;
      margin-bottom: 10px;
      position: relative;
      
      &:before {
        content: '';
        width: 12px;
        height: 12px;
        background-image: url(${airbusIcon});
        position: absolute;
        background-repeat: no-repeat;
        left: 1px;
        top: 1px;
      }
`;

const TimeReturn = Time.extend`
      &:before {
        content: '';
        width: 12px;
        height: 12px;
        background-image: url(${airbusIcon});
        position: absolute;
        background-repeat: no-repeat;
        left: 1px;
        top: 1px;
        transform: rotate(180deg);
      }
`;

const Flight = styled.div`
      flex-basis: 38%;
      padding-left: 20px;
      position: relative;
      
      &:before {
        content: '';
        width: 12px;
        height: 12px;
        background-image: url(${timeIcon});
        position: absolute;
        background-repeat: no-repeat;
        left: 1px;
        top: 1px;
      }
`;

const FlightBlock = styled.div`
      display: none;
      border-bottom: 1px dashed #dddddd;
      padding: 10px 0;
      &:last-child {
        border: none;
      }
      
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
`;

const RouteTime = styled.div`
      font-size: 28px;
      color: #323333;
`;

const City = styled.span`
      font-weight: 500;
      font-size: 12px;
      color: #9ca5a8;
`;

const Date = styled.span`
      font-size: 12px;
      color: #9ca5a8;
`;

const Pin = styled.button`
      background: #fff;
      background-image: url(${pin});
      background-repeat: no-repeat;
      border-radius: 50%;
      padding: 5px;
      height: 20px;
      width: 20px;
      border: 1px solid #9ca5a8;
      background-position: center;
      margin-right: 2px;
`;

const PinTime = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
`;

const Departure = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.5;
      min-width: 100px;
`;

const Route = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-top: 36px;
      position: relative;
`;

const Arrival = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      line-height: 1.5;
      min-width: 100px;
`;

const Iata = styled.span`
      font-size: 10px;
      color: #4a4a4a;
      text-transform: uppercase;
      margin-top: 15px;
`;

const Dot = styled.span`
      border: 1px solid #a0b0b9;
      padding: 5px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      position: relative;
      background: #fff;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #ff6d00;
      }
      
      &:before {
        content: '';
        width: 20px;
        height: 14px;
        background-repeat: no-repeat;
        position: absolute;
        top: -30px;
        left: -3px;
        background-image: url(${plane});
        transform: rotate(-40deg);
      }
`;

const DotArrive = Dot.extend`
      &:before {
        transform: rotate(10deg);
      }
`;

const FlightTime = styled.span`
      font-size: 12px;
      text-align: center;
      color: #a0b0b9;
      position: absolute;
      top: 0;
      right: 40%;
`;

const IataWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
`;

const Line = styled.div`
      background-color: #a0b0b9;
      height: 1px;
      min-width: 172px;
`;

const Warning = styled.span`
      color: #ff654e;
      font-size: 12px;
`;

const Baggage = styled.div`
      margin-top: 5px;
      display: flex;
`;

const Proposals = styled.ul`
      padding: 0;
      margin: 0;
      list-style: none;
      min-width: 200px;
      margin-top: 30px;
`;

const ProposalsButton = styled.button`
      cursor: pointer;
      background: none;
      border: none;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      color: #59bce5;
      width: 100%;
      transition: all 0.3s ease;
      line-height: 1.5;
      
      &:hover {
        color: #ff8b0f;
      }
`;

const ProposalsAll = ProposalsButton.extend`
      font-weight: bold;
      display: block;
      margin: 10px 0;
`;

const Proposal = styled.li`
      padding: 0 10px;
`;

const Name = styled.span``;

const ProposalPrice = styled.span``;

const ContainerTime = styled.div`
      display: flex;
      width: 100%;
`;

const ContainerTimeReturn = styled.div`
      display: flex;
      width: 100%;
`;

const CardWrapper = ({
  logo,
  outTime,
  inTime,
  totalTime,
  direct,
  departure,
  arrival,
  date,
  things,
  baggage,
  handbag,
  status,
  proposals,
  amount
}) => (
  <Card>
    <Left>
      <Things>
        {things.map(things => (
          <BaggageChoice>
            <Baggage>
              {things.handbag > 0 ? (
                <HandBag>{things.handbag}</HandBag>
              ) : (
                <NoBag />
              )}
              {things.baggage > 0 ? (
                <Luggage>{things.baggage}</Luggage>
              ) : (
                <NoBag />
              )}
            </Baggage>
            {things.price && <BaggagePrice>- {things.price} ₽</BaggagePrice>}
          </BaggageChoice>
        ))}
      </Things>
      {amount && <Warning>Осталось {amount} билета</Warning>}
      <Buy>
        Купить
        <BuyPrice>за {proposals[0].price} ₽</BuyPrice>
      </Buy>
      <Site>на {proposals[0].name}</Site>
      {proposals.length > 1 ? (
        <Proposals>
          {proposals.slice(1, 3).map(proposals => (
            <Proposal>
              <ProposalsButton>
                <Name>{proposals.name}</Name>
                <ProposalPrice>{proposals.price} ₽</ProposalPrice>
              </ProposalsButton>
            </Proposal>
          ))}
          <Proposal>
            <ProposalsAll>
              + Еще {proposals.length - 3} предложения
            </ProposalsAll>
          </Proposal>
        </Proposals>
      ) : null}
    </Left>
    {status === 'cheapest' && <TitleGreen>Самый дешевый</TitleGreen>}
    {status === 'fastest' && <TitleBrown>Самый быстрый</TitleBrown>}
    {status === 'best' && <TitlePurple>Самый лучший</TitlePurple>}
    <Content>
      <Top>
        {logo.length > 1 ? (
          <Logo>{logo.map(logo => <LogoSmall src={logo} alt=' ' />)}</Logo>
        ) : (
          <Logo>
            <LogoImage src={logo} alt=' ' />
          </Logo>
        )}
        <Price>
          {proposals[0].price} <Currency>₽</Currency>
        </Price>
        <TicketSharing>
          <Charter>Чартер</Charter>
          <Share />
        </TicketSharing>
      </Top>
      <Bottom>
        <ContainerTime>
            <Time>
                {format(departure.outTime * 1000, 'HH:mm', { locale: ru })} -{' '}
                {format(departure.inTime * 1000, 'HH:mm', { locale: ru })}
            </Time>
            <Flight>
                {distanceInWordsStrict(0, departure.totalTime * 1000, { locale: ru })}
            </Flight>
            {departure.direct ? <Type>Прямой</Type> : <Type>CDG</Type>}
        </ContainerTime>
        <ContainerTimeReturn>
            <TimeReturn>
                {format(arrival.outTime * 1000, 'HH:mm', { locale: ru })} -{' '}
                {format(arrival.inTime * 1000, 'HH:mm', { locale: ru })}
            </TimeReturn>
            <Flight>
                {distanceInWordsStrict(0, arrival.totalTime * 1000, { locale: ru })}
            </Flight>
            {arrival.direct ? <Type>Прямой</Type> : <Type>CDG</Type>}
        </ContainerTimeReturn>
      </Bottom>
      <BottomDesktop>
        <FlightBlock>
          <Departure>
            <PinTime>
              <Pin />{' '}
              <RouteTime>
                {format(departure.outTime * 1000, 'HH:mm', { locale: ru })}
              </RouteTime>
            </PinTime>
            <City>{citiesId[departure.city]}</City>
            <Date>
              {format(departure.date * 1000, 'D MMM YYYY, dd', {
                locale: ru
              })}
            </Date>
          </Departure>
          <Route>
            <IataWrap>
              <Dot />
              <Iata>{airportId[departure.city]}</Iata>
            </IataWrap>
            <Line />
            <FlightTime>
              Всего:
              {distanceInWordsStrict(0, departure.totalTime * 1000, {
                locale: ru
              })}
            </FlightTime>
            <IataWrap>
              <DotArrive />
              <Iata>{airportId[arrival.city]}</Iata>
            </IataWrap>
          </Route>
          <Arrival>
            <RouteTime>
              {format(departure.inTime * 1000, 'HH:mm', { locale: ru })}
            </RouteTime>
            <City>{citiesId[arrival.city]}</City>
            <Date>
              {format(departure.date * 1000, 'D MMM YYYY, dd', {
                locale: ru
              })}
            </Date>
          </Arrival>
        </FlightBlock>
        <FlightBlock>
          <Departure>
            <PinTime>
              <Pin />
              <RouteTime>
                {format(arrival.outTime * 1000, 'HH:mm', { locale: ru })}
              </RouteTime>
            </PinTime>
            <City>{citiesId[arrival.city]}</City>
            <Date>
              {format(arrival.date * 1000, 'D MMM YYYY, dd', {
                locale: ru
              })}
            </Date>
          </Departure>
          <Route>
            <IataWrap>
              <Dot />
              <Iata>{airportId[arrival.city]}</Iata>
            </IataWrap>
            <Line />
            <FlightTime>
              Всего:
              {distanceInWordsStrict(0, arrival.totalTime * 1000, {
                locale: ru
              })}
            </FlightTime>
            <IataWrap>
              <DotArrive />
              <Iata>{airportId[departure.city]}</Iata>
            </IataWrap>
          </Route>
          <Arrival>
            <RouteTime>
              {format(arrival.inTime * 1000, 'HH:mm', { locale: ru })}
            </RouteTime>
            <City>{citiesId[departure.city]}</City>
            <Date>
              {format(arrival.date * 1000, 'D MMM YYYY, dd', {
                locale: ru
              })}
            </Date>
          </Arrival>
        </FlightBlock>
      </BottomDesktop>
    </Content>
    <Opener />
  </Card>
);

const CardsWrapper = () => (
  <div>{CardsData.map(data => <CardWrapper {...data} />)}</div>
);

function Cards() {
  return <CardsWrapper />;
}

export default Cards;
