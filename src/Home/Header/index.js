import React from 'react';
import styled from 'styled-components';
import logoSvg from './aviasales.svg'
import arrowSvg from './arrow.svg'
import calendarSvg from './calendar.svg'
import dropdown from './dropdown.svg'
import aero from './aero.svg'


const Header = styled.header`
      background-color: #00b0de;
      background: linear;
      background: linear-gradient(
        148.48deg,
        #00b0de 22.46%,
        #01aedc 26.15%,
        #02abdb 29.89%,
        #02abdb 33.59%,
        #02abdb 33.81%,
        #196ebd 122.26%
      );
`;

const HeaderContainer = styled.div`
      display: flex;
      flex-direction: column;
      padding-right: 8px;
      padding-left: 8px;
`;

const LinkContainer = styled.div`
      display: flex;
      flex-direction: column;
`;

const LogoImg = styled.img`
      width: 30px;
      height: 29px;
      padding-top: 12px;
`;

const LogoText = styled.p`
      display: none;
`;

const MainHeaderContainer = styled.div`
      display: flex;
      flex-direction: column;
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
`;

const SubTitle = styled.p`
      display: none;
`;

const MainHeaderForm = styled.div`
      display: flex;
      flex-direction: column;
`;

const FormFromInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      height: 56px;
`;

const FromInput = styled.input`
      padding: 16px 18px;
      border: none;
      color: black;
      height: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      margin-bottom: 2px;
      
      ::placeholder {
        color: black;
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
`;

const FromArrowImg = styled.img`
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 21px;
      right: 15px;
`;

const FormArriveInput = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 2px;
`;

const Input = styled.input`
      padding: 18px 16px;
      border: none;
      color: black;
`;

const FormContainerTwoWays = styled.div`
      display: flex;
      flex-direction: row;
      margin-bottom: 2px;
`;

const FormThereInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      width: 49.6%;
      margin-right: 1px;
`;

const InputCalendar = styled.input`
      padding: 18px 16px;
      border: none;
      color: black;
`;

const CalendarBtn = styled.button`
      position: absolute;
      bottom: 16px;
      right: 16px;
      border: none;
      background-color: #fff;
      padding: 0;
`;

const CalendarImg = styled.img`
      display: block;
      width: 16px;
      height: 20px;
`;

const FormBackInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      width: 49.6%;
      margin-left: 1px;
`;

const FormPassInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 16px;
`;

const PassDropdownBtn = styled.button`
      position: absolute;
      border: none;
      background-color: #fff;
      right: 16px;
      top: 16px;
`;

const PassInput = styled(Input)`
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      
      ::placeholder {
        color: black;
      }
`;

const PassDropdownImg = styled.img`
      width: 10px;
      height: 5px;
`;

const BtnSearchContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
`;

const ButtonSearch = styled.button`
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
      margin-bottom: 80px;
       
      &:after {
      content: url(${aero});
      position: absolute;
      padding-left: 16px;
      padding-top: 2px;
`;

export default () => {
    return (
        <Header>
            <HeaderContainer>
                <LinkContainer>
                    <LogoImg alt='Logo' src={logoSvg} />
                    <LogoText>
                        aviasales
                    </LogoText>
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
                        <FormFromInput>
                            <FromInput placeholder='Москва' />
                            <FromText>
                                MOW
                            </FromText>
                            <FromArrowImg alt='Arrow' src={arrowSvg} />
                        </FormFromInput>
                        <FormArriveInput>
                            <Input placeholder='Город прибытия' />
                        </FormArriveInput>
                        <FormContainerTwoWays>
                            <FormThereInput>
                                <InputCalendar placeholder='Туда'
                                               readOnly
                                               autoComplete='off'
                                />
                                <CalendarBtn>
                                    <CalendarImg alt='Calendar' src={calendarSvg} />
                                </CalendarBtn>
                            </FormThereInput>
                            <FormBackInput>
                                <InputCalendar placeholder='Обратно'
                                               readOnly
                                               autoComplete='off'
                                />
                                <CalendarBtn>
                                    <CalendarImg alt='Calendar' src={calendarSvg} />
                                </CalendarBtn>
                            </FormBackInput>
                        </FormContainerTwoWays>
                        <FormPassInput>
                            <PassInput placeholder='1 пассажир, эконом' />
                            <PassDropdownBtn>
                                <PassDropdownImg alt='dropdown' src={dropdown} />
                            </PassDropdownBtn>
                        </FormPassInput>
                    </MainHeaderForm>
                    <BtnSearchContainer>
                        <ButtonSearch>
                            Найти билеты
                        </ButtonSearch>
                    </BtnSearchContainer>
                </MainHeaderContainer>
            </HeaderContainer>
        </Header>
    )
}
