import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DayPicker from '../../Date/index';
import ArriveInput from '../../SearchInput/index'
import PassInput from '../../PassengerInput/index'


import logoSvg from './aviasales.svg'
import aero from './aero.svg'
import arrowSvg from '../../SearchInput/arrow.svg'


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
      box-sizing: border-box;
     
      & .arrive-input {
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
      top: 18px;
`;

const FormArriveInput = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 2px;
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
      width: 302px;
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
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
      border-radius: 4px;
       
      &:after {
        content: url(${aero});
        position: absolute;
        padding-left: 16px;
        padding-top: 2px;
      }
      
      &:hover {
        background-color: #ffa353;
      }
      
      @media screen and (min-width: 768px) {
        font-size: 28px;
      }
      
      @media screen and (min-width: 1024px) {
        margin-left: auto;
        margin-right: auto;
      }   
`;

const FormContainerHeader = styled.div`
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        
        & .home-radius {
          border-bottom-right-radius: 4px;
        }
      }
`;

const FromArrowBtn = styled.button`
      position: absolute;
      bottom: 21px;
      cursor: pointer;
      background-image: url(${arrowSvg});
      padding: 0;
      height: 20px;
      width: 20px;
      background-position: center;
      background-repeat: no-repeat;
      border: transparent;
      top: 18px;
      right: 8px;
`;

const Span = styled.span`
      color: white;
`;

export class HomeHeader extends Component {
   constructor() {
       super();
   }

   state = {
       from: 'Москва',
       to: ''
   };

   updateDataClickTo = (valueTo) => {
       console.log(valueTo)
       this.setState({
           to: valueTo
       })

       console.log(this.state.to + ' TO')
   };

   updateDataClickFrom = (valueFrom) => {
       console.log(valueFrom)
       this.setState({
           from: valueFrom
       })

       console.log(this.state.from + ' FROM')
   }

   swapData = () => {
       console.log('FULL ' + this.state.to + this.state.from)
       this.setState({
           from: this.state.to,
           to: this.state.from
       });

       console.log(this.state.to, ' SPACE ' , this.state.from)
   };

   render() {
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
                                 <ArriveInput className='arrive-input'
                                              placeholder='Город прибытия'
                                              valueParam={this.state.from}
                                              onChangeText={e => this.setState({
                                                  from: e.target.value
                                              })}
                                              updateData={this.updateDataClickFrom}
                                  />
                                 <FromArrowBtn alt='Arrow' onClick={this.swapData}/>
                             </FormFromInput>
                             <FormArriveInput>
                                 <ArriveInput placeholder='Город прибытия'
                                              valueParam={this.state.to}
                                              onChangeText={e => this.setState({
                                                  to: e.target.value
                                              })}
                                              updateData={this.updateDataClickTo}
                                 />
                             </FormArriveInput>
                         </FormContainerHeader>
                         <FormContainerHeader>
                             <DayPicker />
                             <PassInput className='home-radius'/>
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
}

export default HomeHeader;
