import React from "react";
import styled from "styled-components";

import back from "./back.svg";
import logo from "./logo.svg";
import arrow from "./arrow.svg";
import swapIcon from "./swap.svg";
import DayPicker from "../../Date/index";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
      background: linear-gradient(
        96.7deg,
        #00b0de -47.94%,
        #01aedc -44.27%,
        #02abdb -40.55%,
        #02abdb -36.86%,
        #02abdb -36.65%,
        #196ebd 51.35%
      );
      padding: 12px 0 25px 0;
`;

const Mobile = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      color: #fff;
      justify-content: space-between;
      align-items: center;
      line-height: 1.5;
      position: relative;
`;

const UpButton = styled.button`
      background: #00ace2;
      opacity: 0.5;
      border-radius: 100px;
      text-transform: uppercase;
      padding: 6px 16px;
      color: #fff;
      border: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      transition: all 0.3s ease;
      
      &:hover {
        opacity: 1;
      }
      
      &:focus {
        outline: none;
      }
`;

const Back = styled.button`
      border: none;
      background: none;
      background-image: url(${back});
      width: 16px;
      height: 16px;
      cursor: pointer;
      
      &:focus {
        outline: none;
      }
      
      @media screen and (min-width: 768px) {
        display: none;
      }
`;

const UpWrap = styled.div`
      background-color: #eaeaea;
      padding: 6px 0 16px 0;
      text-align: center;
      @media screen and (min-width: 768px) {
        display: none;
      }
`;

const MobileLeft = styled.div`
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 768px) {
        display: none;
      }
`;

const Currency = styled.button`
      background: none;
      text-transform: uppercase;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 100px;
      padding: 8px 16px;
      cursor: pointer;
      color: #fff;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
      }
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
`;

const Cities = styled.div`
      font-size: 16px;
`;

const Main = styled.div`
      display: none;
      
      @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 40px;
      }
`;

const MobileBottom = styled.div`
      display: flex;
      flex-direction: row;
`;

const MobileDates = styled.div`
      font-size: 12px;
      display: inline-block;
      margin-right: 4px;
`;

const Passengers = styled.div`
      font-size: 12px;
      display: inline-block;
`;

const Aviasales = styled.p`
      font-size: 20px;
      color: #fff;
      text-decoration: none;
      display: none;
      margin: 0;
      padding-left: 40px;
    
      @media screen and (min-width: 768px) {
        display: inline-block;
      }
`;

const AviasalesLink = styled(Link)`
      display: none;
    
      @media screen and (min-width: 768px) {
        display: inline-block;
      }
`;

const Input = styled.input`
      padding: 18px 16px;
      background: #fff;
      border: none;
      margin: 2px 0;
      border-radius: 5px;
      display: inline-block;
      box-sizing: border-box;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ff8e41;
      }
`;

const OriginInput = Input.extend`
      width: 100%;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    
      @media screen and (min-width: 768px) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    
      @media screen and (min-width: 1024px) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 5px;
      }
`;

const DestinationInput = Input.extend`
      width: 100%;
      border-radius: 0;
    
      @media screen and (min-width: 768px) {
        border-top-right-radius: 5px;
      }
    
      @media screen and (min-width: 1024px) {
        border-radius: 0;
      }
`;

const Swap = styled.button`
      background: none;
      border: none;
      height: 32px;
      width: 32px;
      background-image: url(${swapIcon});
      background-repeat: no-repeat;
      cursor: pointer;
      position: absolute;
      right: 0px;
      top: 20px;
`;

const LogoImg = styled.img`
      vertical-align: middle;
      margin-right: 12px;
      position: absolute;
      top: 6px;
`;

const DropdownList = styled.div`
      padding: 18px 16px;
      background: #fff;
      border: none;
      margin: 2px 0;
      border-radius: 5px;
      width: 100%;
      position: relative;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
        display: inline-block;
        border-radius: 0;
      }
    
      @media screen and (min-width: 1024px) {
        flex-basis: 41%;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
`;

const Class = styled.span`
      position: absolute;
      color: #a0b0b9;
      left: 112px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
`;

const DropdownArrow = styled.button`
      position: absolute;
      width: 18px;
      height: 18px;
      right: 0px;
      top: 18px;
      background: #fff;
      border: none;
      background-repeat: no-repeat;
      cursor: pointer;
      padding: 5px;
      padding-left: 25px;
      background-position: center;
      background-image: url(${arrow});
`;

const Origin = styled.div`
      position: relative;
      display: flex;
      width: 100%;
    
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
        padding-right: 2px;
      }
    
      @media screen and (min-width: 1024px) {
        flex-basis: 17%;
      }
`;

const Destination = styled.div`
      display: flex;
      width: 100%;
      position: relative;
    
      @media screen and (min-width: 768px) {
        flex-basis: 49%;
        flex-grow: 1;
      }
    
      @media screen and (min-width: 1024px) {
        flex-basis: 17%;
        flex-grow: 0;
        margin-right: 2px;
      }
`;

const ButtonWrapper = styled.div`
      display: flex;
      flex-grow: 1;
`;

const Button = styled.button`
      background: #ff9241;
      border-radius: 4px;
      color: #fff;
      border: none;
      font-weight: 700;
      line-height: normal;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    
      @media screen and (min-width: 768px) {
        margin: 2px 0 2px 2px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0;
        width: 99%;
      }
      
      &:focus {
        outline: none;
      }
      
      &:hover {
        background-color: #ffa353;
      }
    
      @media screen and (min-width: 1024px) {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    
      @media screen and (min-width: 1024px) {
        margin-left: 15px;
        border-radius: 4px;
      }
`;

const Iata = styled.span`
      color: #a0b0b9;
      text-transform: uppercase;
      position: absolute;
      right: 40px;
      top: 20px;
`;

const Form = styled.div``;

const FormWrapper = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
      @media screen and (min-width: 1024px) {
        flex-wrap: nowrap;
      }
`;

const DropdownWrap = styled.div`
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      position: relative;
`;

export default () => {
  return (
    <div>
      <Wrapper>
        <div className="container">
          <Mobile>
            <Back />
            <AviasalesLink to="/">
              <LogoImg src={logo} alt="logo" />
              <Aviasales>aviasales</Aviasales>
            </AviasalesLink>
            <MobileLeft>
              <Cities>Москва - Барселона</Cities>
              <MobileBottom>
                <MobileDates>24 фев - 3 март,</MobileDates>
                <Passengers>1 пассажир</Passengers>
              </MobileBottom>
            </MobileLeft>
            <Currency>rub</Currency>
          </Mobile>
          <Main>
            <Form>
              <FormWrapper>
                <Origin>
                  <OriginInput id="origin" placeholder="Москва" />
                  <Swap />
                  <Iata>mow</Iata>
                </Origin>
                <Destination>
                  <DestinationInput
                    id="destination"
                    placeholder="Город прибытия"
                  />
                </Destination>
                <DayPicker />
                <DropdownWrap>
                   <DropdownList>
                      1 пассажир, <Class>эконом</Class>
                    <DropdownArrow />
                  </DropdownList>
                  <ButtonWrapper>
                    <Button>Найти билеты</Button>
                  </ButtonWrapper>
                </DropdownWrap>
              </FormWrapper>
            </Form>
          </Main>
        </div>
      </Wrapper>
      <UpWrap>
        <div className="container">
          <UpButton>наверх</UpButton>
        </div>
      </UpWrap>
    </div>
  );
}

