import React, { Component } from 'react';
import styled from 'styled-components';

import dropdown from './dropdown.svg'

const PassInput = styled.input`
      padding: 18px 16px;
      border: none;
      color: black;
      box-sizing: border-box;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      cursor: pointer;
      
      ::placeholder {
        color: black;
      }
      
      @media screen and (min-width: 768px) {
        border-bottom-left-radius: 0;
      }
      
      @media screen and (min-width: 1024px) {
        border-top-right-radius: 4px;
        padding-right: 25px;
      }
`;

const FormPassInput = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 2px;
      box-sizing: border-box;
      
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
      }
`;

const PassDropdownBtn = styled.button`
      position: absolute;
      border: none;
      background-color: #fff;
      right: 16px;
      top: 16px;
`;

const PassDropdownImg = styled.img`
      width: 10px;
      height: 5px;
`;

class Passenger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormPassInput>
                <PassInput placeholder={this.props.placeholder}
                           readOnly
                           autoComplete='off'/>
                <PassDropdownBtn>
                    <PassDropdownImg alt='dropdown' src={dropdown} />
                </PassDropdownBtn>
            </FormPassInput>
        )
    }
}

export default Passenger;
