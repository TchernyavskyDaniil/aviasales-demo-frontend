import React, { Component } from 'react';
import styled from 'styled-components';

import dropdown from './dropdown.svg'
import checked from '../Search/Filter/checked.svg'
import unchecked from '../Search/Filter/unchecked.svg'
import reverse from './reverse.svg'

const PassInput = styled.input`
      padding: 18px 16px;
      border: none;
      color: black;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      ::placeholder {
        color: black;
      }
      
      @media screen and (min-width: 768px) {
        max-width: 200px;
      }
      
      @media screen and (min-width: 1024px) {
        padding-right: 25px;
      }
      
      @media screen and (min-width: 1024px) and (max-width: 1200px) {
        max-width: 210px;
      }
`;

const FormPassInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 2px;
      box-sizing: border-box;
      position: relative;
      
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
      }
`;

const PassDropdownBtn = styled.button`
      position: absolute;
      border: none;
      background-color: #fff;
      right: 8px;
      top: 16px;
      cursor: pointer;
`;

const PassDropdownImg = styled.img`
      width: 10px;
      height: 5px;
`;

const ListPassengers = styled.div`
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 0;
      position: absolute;
      width: 100%;
      top: 58px;
      border-radius: 4px;
      z-index: 100;
      box-shadow: 0px 0px 8px rgba(74,74,74,0.2), 
                  0px 2px 4px rgba(74,74,74,0.2);
`;

const ItemPassenger = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 15px;
      align-items: center;
`;

const TypePassenger = styled.p`
      margin: 0;
      font-size: 14px;
      line-height: 18px;
      color: #4A4A4A;
`;

const CalcPassenger = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #DBDBDB;
      border-radius: 6px;
      min-width: 72px;
      height: 32px;
      justify-content: space-between;
      user-select: none;
`;

const Button = styled.button`
      border-color: transparent;
      background-color: transparent;
      color: #DBDBDB;
      cursor: pointer;
      height: 100%;
`;

const ButtonMinus = Button.extend`
      border-right: 1px solid #dbdbdb;    
      padding-left: 5.5px;
      padding-right: 5.5px;
`;

const Number = styled.p`
      margin: 0;
      font-size: 14px;
      line-height: 16px;
      color: #4A4A4A;
`;

const ButtonPlus = Button.extend`
      border-left: 1px solid #dbdbdb;
`;

const DescPassenger = styled.p`
      margin: 0;
      font-size: 12px;
      line-height: 18px;
      color: #A0B0B9;
      padding-top: 5px;
`;

const TextPassenger = styled.div`
      display: flex;
      flex-direction: column;
`;

const Checkbox = styled.input`
      position: absolute;
      opacity: 0;
      cursor: pointer;
`;

const Checkmark = styled.span`
      position: absolute;
      top: 14px;
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

const Name = styled.span`
      font-size: 12px;
      color: #4a4a4a;
      transition: all 0.3s ease;
`;

const Label = styled.label`
      display: flex;
      position: relative;
      padding: 16px 0 16px 24px;
      justify-content: space-between;
      cursor: pointer;
      font-size: 22px;
      user-select: none;
      margin-left: 15px;
      margin-right: 15px;
      border-top: 1px solid #DBDBDB;
      
      &:hover ${Name} {
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

const Container = styled.div`
      display: flex;
      flex-direction: column;
      cursor: pointer;
      background-color: white;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      
      @media screen and (min-width: 768px) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      
      @media screen and (min-width: 1024px) {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
`;

const TypeClass = styled.p`
      position: absolute;
      left: 110px;
      top: 20px;
      margin: 0;
      user-select: none;
`;

class Passenger extends Component {
    state = {
        isOpen: false,
        countAdult: 0,
        countChildren: 0,
        countBabe: 0,
        typeClass: 'эконом',
        typeBtn: true
    };

    handlerToggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            typeBtn: !prevState.typeBtn
        }));
    };

    handlerMinusAdult = () => {
        if (this.state.countAdult >= 1) {
            this.setState({countAdult: this.state.countAdult - 1})
        }
    };

    handlerPlusAdult = () => {
        this.setState({countAdult: this.state.countAdult + 1})
    };

    handlerPlusChildren = () => {
        this.setState({countChildren: this.state.countChildren + 1})
    };

    handlerMinusChildren = () => {
        if (this.state.countChildren >= 1) {
            this.setState({countChildren: this.state.countChildren - 1})
        }
    };

    handlerPlusBabe = () => {
        this.setState({countBabe: this.state.countBabe + 1})
    };

    handlerMinusBabe = () => {
        if (this.state.countBabe >= 1) {
            this.setState({countBabe: this.state.countBabe - 1})
        }
    };

    handlerChangeClass = () => {
      this.setState(prevState => ({
          typeClass: !prevState.typeClass
      }))
    };

    render() {
        return (
            <FormPassInput>
                <Container onClick={this.handlerToggleOpen}>
                    <PassInput placeholder={this.props.placeholder}
                               readOnly
                               autoComplete='off'
                    />
                    <TypeClass>
                        {this.state.typeClass ? 'эконом' : 'бизнес'}
                    </TypeClass>
                    <PassDropdownBtn>
                        {this.state.typeBtn ?
                            <PassDropdownImg alt='dropdown' src={dropdown} /> :
                            <PassDropdownImg alt='dropdown'
                                             src={reverse}/>}
                    </PassDropdownBtn>
                </Container>
                {
                    this.state.isOpen && (
                        <ListPassengers>
                            <ItemPassenger>
                                <TextPassenger>
                                    <TypePassenger>
                                        Взрослые
                                    </TypePassenger>
                                </TextPassenger>
                                <CalcPassenger>
                                    <ButtonMinus onClick={this.handlerMinusAdult}>
                                        —
                                    </ButtonMinus>
                                    <Number>
                                        {this.state.countAdult}
                                    </Number>
                                    <ButtonPlus onClick={this.handlerPlusAdult}>
                                        +
                                    </ButtonPlus>
                                </CalcPassenger>
                            </ItemPassenger>
                            <ItemPassenger>
                                <TextPassenger>
                                    <TypePassenger>
                                        Дети до 12 лет
                                    </TypePassenger>
                                </TextPassenger>
                                <CalcPassenger>
                                    <ButtonMinus onClick={this.handlerMinusChildren}>
                                        —
                                    </ButtonMinus>
                                    <Number>
                                        {this.state.countChildren}
                                    </Number>
                                    <ButtonPlus onClick={this.handlerPlusChildren}>
                                        +
                                    </ButtonPlus>
                                </CalcPassenger>
                            </ItemPassenger>
                            <ItemPassenger>
                                <TextPassenger>
                                    <TypePassenger>
                                        Дети до 2 лет
                                    </TypePassenger>
                                    <DescPassenger>
                                        Без места
                                    </DescPassenger>
                                </TextPassenger>
                                <CalcPassenger>
                                    <ButtonMinus onClick={this.handlerMinusBabe}>
                                        —
                                    </ButtonMinus>
                                    <Number>
                                        {this.state.countBabe}
                                    </Number>
                                    <ButtonPlus onClick={this.handlerPlusBabe}>
                                        +
                                    </ButtonPlus>
                                </CalcPassenger>
                            </ItemPassenger>
                            <Label>
                                <Name>
                                    Бизнес-класс
                                </Name>
                                <Checkbox onClick={this.handlerChangeClass} type="checkbox" />
                                <Checkmark />
                            </Label>
                        </ListPassengers>
                    )
                }
            </FormPassInput>
        )
    }
}

export default Passenger;
