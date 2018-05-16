import React from "react";
import styled from "styled-components";

import raiting from "./raiting.svg";
import android from "./android.svg";
import iphone from "./iphone.png";
import windows from "./windows.svg";
import apple from "./apple.svg";

const AppsAd = styled.div`
    background-color: #00b0de;
    background: linear;
    background: linear-gradient(#00b0de 0%, #196ebd 100%);
    
    @media screen and (min-width: 768px) {
      margin-top: 32px;
    }
`;

const Title = styled.h2`
    padding-top: 24px;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    line-height: 26px;
    display: block;
    text-align: center;
    
    @media screen and (min-width: 768px) {
      padding-right: 100px;
      text-align: left;
      font-size: 2rem;     
      font-weight: 500;
      padding-top: 46px;
    }
  
    @media screen and (min-width: 1024px) {
      padding-top: 66px;
    }
`;

const RatingApp = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 19px;
    
    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
`;

const Rating = styled.img`
      padding-right: 8px;
`;

const RatingText = styled.p`
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
      line-height: 20px;
`;

const Main = styled.div`
      display: flex;
      position: relative;
`;

const Iphone = styled.img`
      position: absolute;
      bottom: 0;
      left: -15px;
      width: 162px;
      height: 213px;
    
      @media screen and (min-width: 768px) {
        width: 237px;
        height: 312px;
      }
    
      @media screen and (min-width: 1024px) {
        width: 234px;
        height: 308px;
      }
`;

const OtherApp = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 46px;
    padding-bottom: 57px;
    
    @media screen and (min-width: 768px) {
      padding-top: 40px;
      padding-bottom: 54px;
      flex-direction: row;
    }
`;

const Line = styled.div`
      display: flex;
      padding-top: 20px;
      
      @media screen and (min-width: 768px) {
        padding-top: 0px;
        padding-right: 21px;
        padding-left: 20px;
        border-right: 1px solid #fff;
    
        &:first-child {
          padding-left: 0;
        }
        
        &:last-child {
          border: none;
        }
      }
`;

const Icon = styled.img`
      padding-right: 8px;
`;

const TextLink = styled.a`
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
      line-height: 25px;
      text-align: left;
      
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
`;

export default () => {
  return (
    <AppsAd>
      <div className="container">
        <Main>
          <Iphone alt="iphone" src={iphone} />
          <div className="row">
            <div className="col-xs-12 col-md-offset-4 col-md-8">
              <Title>Скачай мобильное приложение Aviasales.ru</Title>
              <RatingApp>
                <Rating alt="rating" src={raiting} />
                <RatingText>Более 103 000 оценок</RatingText>
              </RatingApp>
            </div>
            <div className="col-xs-offset-6 col-xs-6 col-md-offset-4 col-md-8">
              <OtherApp>
                <Line>
                  <Icon alt="apple" src={apple} />
                  <TextLink>iPhone или IPad</TextLink>
                </Line>
                <Line>
                  <Icon alt="android" src={android} />
                  <TextLink>Android</TextLink>
                </Line>
                <Line>
                  <Icon alt="Windows" src={windows} />
                  <TextLink>Windows Phone</TextLink>
                </Line>
              </OtherApp>
            </div>
          </div>
        </Main>
      </div>
    </AppsAd>
  );
};
