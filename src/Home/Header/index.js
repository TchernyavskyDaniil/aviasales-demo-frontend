import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DayPicker from '../../Date/index';
import ArriveInput from '../../SearchInput/index'
import PassInput from '../../PassengerInput/index'


import logoSvg from './aviasales.svg'
import arrowSvg from './arrow.svg'
import aero from './aero.svg'


const Header = styled.header`
      background-color: #00b0de;
      background: linear-gradient( 
          148.48deg, 
          #00b0de 22.46%, 
          #01aedc 26.15%, 
          #02abdb 29.89%, 
          #02abdb 33.59%, 
          #02abdb 33.81%, 
          #196ebd 122.26% )
`;

const HeaderContainer = styled.div`
      display: flex;
      flex-direction: column;
      padding-right: 8px;
      padding-left: 8px;
`;

const LinkContainer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 120px;
      min-width: 120px
      
      @media screen and (min-width: 1024px) {
        padding-left: 6%;
      }
      
      &:hover {
        opacity: 0.8;
      }
`;

const LogoImg = styled.img`
      width: 30px;
      height: 29px;
      padding-top: 12px;
`;

const LogoText = styled.p`
      display: none;
      
      @media screen and (min-width: 768px) {
        display: inline-block;
        font-size: 20px;
        line-height: 25px;
        text-align: left;
        color: #fff;
        margin: 0;
        padding-left: 12px;
        position: absolute;
        top: 13px;
      }
`;

const MainHeaderContainer = styled.div`
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 768px) {
        margin-left: 74px;
        margin-right: 74px;
      }
`;

const MainHeaderText = styled.div`
      display: flex;
      flex-direction: column;
`;

const Title = styled.h1`
      display: block;
      color: #fff;
      line-height: 1;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      padding-top: 47px;
      margin-top: 0;
      
      @media screen and (min-width: 768px) {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 8px;
      }
`;

const SubTitle = styled.p`
      display: none;
      
      @media screen and (min-width: 768px) {
        display: block;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        font-weight: bold;
        color: #fff;
        margin-top: 0;
        margin-bottom: 40px;
      }
`;

const MainHeaderForm = styled.div`
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
      }
`;

const FormFromInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      height: 56px;
      padding-top: 2px;
      box-sizing: border-box;
     
      & .MoscowInput {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        
        @media screen and (min-width: 768px) {
          border-bottom-left-radius: 0;
          border-top-right-radius: 0;
        }
        
        @media screen and (min-width: 1024px) {
          border-bottom-left-radius: 4px;
        }
      }
     
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
        margin-right: 2px;
      }
`;

const FromText = styled.p`
      font-size: 1rem;
      color: #a0b0b9;
      font-weight: 400;
      line-height: 1.25;
      position: absolute;
      bottom: 20px;
      right: 40px;
      margin: 0;
      top: 19px;
`;

const FromArrowImg = styled.img`
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 21px;
      right: 15px;
      top: 22px;
`;

const FormArriveInput = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 2px;
      padding-top: 2px;
      box-sizing: border-box;
      
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
      }
      
      @media screen and (min-width: 1024px) {
        margin-right: 2px;
      }
`;

const BtnSearchContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 16px;
      height: 64px;
      width: 308px;
      align-items: center;
      margin-bottom: 80px;
      margin-left: auto;
      margin-right: auto;
      
      @media screen and (min-width: 768px) {
        margin-top: 32px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 120px;
      }
      
      @media screen and (min-width: 1024px) {
        margin-bottom: 240px;
      }
`;

const ButtonSearch = styled.button`
      text-decoration: none;
      cursor: pointer;
      border: none;
      background-color: #ff9241;
      padding-top: 13px;
      padding-bottom: 13px;
      padding-left: 52px;
      padding-right: 52px;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.25;
       
      &:after {
        content: url(${aero});
        position: absolute;
        padding-left: 16px;
        padding-top: 2px;
      }
      
      @media screen and (min-width: 1024px) {
        width: 40%%;
        margin-left: auto;
        margin-right: auto;
      }
      
      &:hover {
        background-color: #ffa353;
      }
`;

const FormContainerHeader = styled.div`
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
`;

const Span = styled.span`
      color: white;
`;

export default () => {
    return (
        <Header>
            <HeaderContainer>
                <LinkContainer>
                    <Link to='/'>
                        <LogoImg alt='Logo' src={logoSvg} />
                        <LogoText>
                            aviasales
                        </LogoText>
                    </Link>
                </LinkContainer>
                <MainHeaderContainer>
                    <MainHeaderText>
                        <Title>
                            Поиск дешевых авиабилетов
                        </Title>
                        <SubTitle>
                            Лучший способ купить авиабилеты дешево
                        </SubTitle>
                    </MainHeaderText>
                    <MainHeaderForm>
                        <FormContainerHeader>
                            <FormFromInput>
                                <ArriveInput className='MoscowInput' placeholder='Москва' />
                                <FromText>
                                    MOW
                                </FromText>
                                <FromArrowImg alt='Arrow' src={arrowSvg} />
                            </FormFromInput>
                            <FormArriveInput>
                                <ArriveInput placeholder='Город прибытия'/>
                            </FormArriveInput>
                        </FormContainerHeader>
                        <FormContainerHeader>
                            <DayPicker />
                            <PassInput placeholder='1 пассажир, '/>
                        </FormContainerHeader>
                    </MainHeaderForm>
                    <BtnSearchContainer>
                        <Link to='/search'>
                            <ButtonSearch>
                                <Span>
                                    Найти билеты
                                </Span>
                            </ButtonSearch>
                        </Link>
                    </BtnSearchContainer>
                </MainHeaderContainer>
            </HeaderContainer>
        </Header>
    )
}
