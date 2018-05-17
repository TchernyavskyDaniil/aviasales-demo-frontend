import React, { Component } from "react";
import styled from "styled-components";
import checked from "./checked.svg";
import unchecked from "./unchecked.svg";
import plane from "./plane.svg";
import close from "./close.svg";
import { Range } from "rc-slider";
import "./index.css";

const Wrapper = styled.div`
      min-width: 300px;
      background: #fff;
      margin-right: 10px;
      display: none;
      border-radius: 4px;
    
      @media (min-width: 1024px) {
        display: block;
        min-width: 250px;
        max-width: 280px;
        align-self: flex-start;
      }
`;

const Block = styled.div`
      padding: 16px;
      border-bottom: 1px solid #dddddd;
      position: relative;
      transition: all 0.3s ease;
      
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border: none;
      }
`;

const Filter = styled.span`
      text-transform: uppercase;
      color: #5b5b5c;
      font-size: 12px;
      font-weight: bold;
      position: relative;
      display: block;
      padding-left: 20px;
      
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 8px;
        margin-top: -5px;
        left: 0;
        width: 0;
        height: 0;
        border-top: 5px solid #abbdc1;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        transition: all 0.3s;
        transform: rotate(-90deg);
      }
`;

const FilterActive = Filter.extend`
      margin-bottom: 20px;
      
      &:before {
        transform: rotate(0);
      }
`;

const Price = styled.span`
      font-size: 12px;
      color: #a0b0b9;
      transition: all 0.3s ease;
`;

const Filters = styled.div`
      padding: 0;
      margin: 0;
      margin-top: 10px;
`;

const Close = styled.button`
      border: none;
      background: none;
      padding: 0;
      position: absolute;
      right: 0;
      top: 0;
      background-image: url(${close});
      background-repeat: no-repeat;
      width: 16px;
      height: 16px;
      cursor: pointer;
`;

const Name = styled.span`
      font-size: 12px;
      color: #4a4a4a;
      transition: all 0.3s ease;
`;

const Checkbox = styled.input`
      position: absolute;
      opacity: 0;
      cursor: pointer;
`;

const Checkmark = styled.span`
      position: absolute;
      top: 8px;
      left: 0;
      width: 18px;
      height: 18px;
      transition: all 0.3s;
      background-repeat: no-repeat;
      background-image: url(${unchecked});
      
      :after {
        content: "";
        position: absolute;
        display: none;
      }
`;

const Label = styled.label`
      display: flex;
      position: relative;
      padding: 12px 0 12px 24px;
      justify-content: space-between;
      cursor: pointer;
      font-size: 22px;
      user-select: none;
      
      &:hover ${Name}, &:hover ${Price} {
        color: #59bce5;
      }
    
      & ${Checkbox}:checked ~ ${Checkmark}:after {
        display: block;
        background-repeat: no-repeat;
        background-image: url(${checked});
        width: 18px;
        height: 18px;
      }
    
      & ${Checkmark}:after {
        left: 0;
        top: 0;
      }
`;

const Route = styled.div`
      display: flex;
      margin: 25px 0 5px 0;
`;

const Strong = styled.span`
      font-weight: bold;
      color: #323333;
      font-size: 12px;
      display: block;
      margin-bottom: 10px;
`;

const PlaneIcon = styled.img`
      width: 14px;
      height: 14px;
      margin: 0 5px;
`;

const Amount = styled.span`
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
      color: #a0b0b9;
      position: absolute;
      margin-left: 5px;
`;

const Clear = styled.button`
      display: block;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 12px;
      color: #00bde4;
      text-transform: uppercase;
      position: relative;
      min-width: 100%;
      text-align: left;
      transition: all 0.3s ease;
      
      &:hover {
        text-decoration: underline;
      }
`;

const Text = styled.span`
      font-size: 12px;
      color: #323333;
      margin-bottom: 10px;
`;

const Date = styled.span`
      font-size: 12px;
      color: #323333;
      line-height: 1.5;
`;

const Dates = styled.div`
      display: flex;
      justify-content: space-between;
`;

export default () => {
  return (
    <Wrapper>
      <Block>
        <FilterActive>
          Пересадки <Close />
        </FilterActive>
        <Filters>
          <Label>
            <Name>Все</Name>
            <Price />
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Без пересадок</Name>
            <Price>7 712 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>1 пересадка</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>2 пересадки</Name>
            <Price>16 821 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>3 пересадки</Name>
            <Price>23 986 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
        </Filters>
      </Block>
      <Block>
        <FilterActive>Время вылета и прибытия</FilterActive>
        <Route>
          <Strong>Москва</Strong>
          <PlaneIcon src={plane} />
          <Strong>Барселона</Strong>
        </Route>
        <Text>Вылет из Москвы:</Text>
        <Dates>
          <Date>c 00:05, 24 фев</Date>
          <Date>до 23:45, 24 фев</Date>
        </Dates>
        <Range defaultValue={[0, 100]} />
        <Text>Прибытие в Барселону:</Text>
        <Dates>
          <Date>c 00:05, 24 фев</Date>
          <Date>до 23:45, 24 фев</Date>
        </Dates>
        <Range defaultValue={[0, 100]} />
        <Route>
          <Strong>Барселона</Strong>
          <PlaneIcon src={plane} />
          <Strong>Москва</Strong>
        </Route>
        <Text>Вылет из Москвы:</Text>
        <Dates>
          <Date>c 00:05, 24 фев</Date>
          <Date>до 23:45, 24 фев</Date>
        </Dates>
        <Range defaultValue={[0, 100]} />
        <Text>Прибытие в Барселону:</Text>
        <Dates>
          <Date>c 00:05, 24 фев</Date>
          <Date>до 23:45, 24 фев</Date>
        </Dates>
        <Range defaultValue={[0, 100]} />
      </Block>
      <Block>
        <Filter>Багаж</Filter>
      </Block>
      <Block>
        <Filter>Длительность пересадки</Filter>
      </Block>
      <Block>
        <FilterActive>Время вылета и прибытия</FilterActive>
        <Route>
          <Strong>Москва</Strong>
          <PlaneIcon src={plane} />
          <Strong>Барселона</Strong>
        </Route>
        <Dates>
          <Date>от 04ч 20м</Date>
          <Date>до 48ч 20м</Date>
        </Dates>
        <Range defaultValue={[0, 100]} />
        <Route>
          <Strong>Барселона</Strong>
          <PlaneIcon src={plane} />
          <Strong>Москва</Strong>
        </Route>
        <Dates>
          <Date>от 04ч 20м</Date>
          <Date>до 48ч 20м</Date>
        </Dates>
        <Range defaultValue={[0, 100]} />
      </Block>
      <Block>
        <FilterActive>
          Авиакомпании <Amount>43</Amount>
        </FilterActive>
        <Filters>
          <Label>
            <Name>Несколько авиакомпаний</Name>
            <Price />
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Text>
            Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную
          </Text>
        </Filters>
        <Filters>
          <Strong>Альянсы</Strong>
          <Label>
            <Name>Все</Name>
            <Price />
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Star Alliance</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>OneWorld</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>SkyTeam</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
        </Filters>
        <Filters>
          <Strong>Авиакомпании</Strong>
          <Label>
            <Name>Все</Name>
            <Price />
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Aegean Airlines</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Algerie</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Europe</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Aegean Airlines</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Algerie</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Europe</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Aegean Airlines</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Algerie</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Europe</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Aegean Airlines</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
          <Label>
            <Name>Air Algerie</Name>
            <Price>11 150 ₽</Price>
            <Checkbox type="checkbox" />
            <Checkmark />
          </Label>
        </Filters>
      </Block>
      <Block>
        <Filter>Аэропорты</Filter>
      </Block>
      <Block>
        <Filter>
          Аэропорт пересадки <Amount>73</Amount>
        </Filter>
      </Block>
      <Block>
        <Filter>
          Агенства <Amount>43</Amount>
        </Filter>
      </Block>
      <Block>
        <Clear>
          сбросить все фильтры <Close />
        </Clear>
      </Block>
    </Wrapper>
  );
}
