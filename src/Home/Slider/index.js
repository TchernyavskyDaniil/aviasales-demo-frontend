import React from "react";
import styled from "styled-components";
import s7 from "./s7.png";
import aeroflot from "./aeroflot.png";
import elal from "./elal.png";
import oneTwoTrip from "./onetwotrip.png";
import koreanAir from "./koreanair.png";
import border from "./border.png";
import sliderArrow from "./slider-arrow.svg";

const Wrapper = styled.div`
      display: none;
      padding: 24px 0;
      color: #5c5c5c;
      position: relative;
      
      :after {
        content: '';
        width: 100%;
        height: 7px;
        position: absolute;
        background-image: url(${border});
      }
    
      @media (min-width: 768px) {
        display: block;
      }
`;

const Title = styled.h2`
      font-weight: 500;
      font-size: 32px;
      text-align: center;
      
      @media screen and (min-width: 1024px) {
        margin-bottom: 10px;
      }
`;

const Logo = styled.img`
      display: block;
      vertical-align: middle;
      margin: 10px 10px 0;
      align-self: center;
      flex-basis: 24%;
    
      @media screen and (min-width: 1024px) {
        flex-basis: auto;
      }
`;

const SliderWrapper = styled.div`
      position: relative;
    
      @media screen and (min-width: 1024px) {
        padding-top: 10px;
        padding-bottom: 0;
      }
`;

const Left = styled.button`
      height: 32px;
      width: 18px;
      position: absolute;
      right: 0;
      top: 41%;
      border: none;
      background: none;
      cursor: pointer;
      bottom: 0;
      transform: rotate(-180deg);
      
      &:focus {
        outline: none;
      }
      
      background-image: url(${sliderArrow});
`;

const Right = styled.button`
    height: 32px;
    width: 18px;
    position: absolute;
    left: 0;
    top: 41%;
    bottom: 0;
    border: none;
    background: none;
    
    &:focus {
      outline: none;
    }
    
    cursor: pointer;
    background-image: url(${sliderArrow});
`;

const Pagination = styled.div`   
      @media screen and (min-width: 768px) {
        text-align: center;
        width: 10%;
        padding: 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto; 
       }
       
       @media screen and (min-width: 1024px) {
        width: 7%;
      }
`;

const DotActive = styled.button`
      width: 16px;
      height: 16px;
      background: #818181;
      border: 1px solid #818181;
      border-radius: 50px;
      display: inline-block;
      cursor: pointer;
`;

const Dot = styled.button`
      width: 16px;
      height: 16px;
      background: #fff;
      border: 1px solid #818181;
      border-radius: 50px;
      display: inline-block;
      cursor: pointer;
`;

const Slide = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
`;

export default () => {
    return (
      <Wrapper>
        <div className="container">
          <Title>
            Дешевые авиабилеты от крупнейших авиакомпаний и агентств
          </Title>
          <SliderWrapper>
            <Slide>
              <Logo src={s7} alt="s7" />
              <Logo src={aeroflot} alt="aeroflot" />
              <Logo src={elal} alt="elal" />
              <Logo src={koreanAir} alt="koreanAir" />
              <Logo src={oneTwoTrip} alt="oneTwoTrip" />
            </Slide>
            <Left />
            <Right />
            <Pagination>
              <DotActive />
              <Dot />
              <Dot />
            </Pagination>
          </SliderWrapper>
        </div>
      </Wrapper>
    );
}
