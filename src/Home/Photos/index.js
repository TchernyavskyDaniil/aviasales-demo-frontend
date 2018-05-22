import React from 'react';
import styled from 'styled-components';

import krasnodar from './krasnodar.jpg';
import bars from './barselona.jpg';
import sochi from './sochi.jpg';
import minwater from './minw.jpg';
import ptr from './spb.jpg';
import simf from './simferopol.jpg';

import flagSpain from "./spain.png";
import flagRu from "./flag-ru.png";

const SectionPhoto = styled.section`
      display: flex;
      flex-direction: column;
      background-color: #F8FCFF;
      padding-top: 20px;
      padding-left: 16px;
      padding-right: 16px;
      
      @media screen and (min-width: 768px) {
        padding-left: 70px;
        padding-right: 70px;
      }
      
      @media screen and (min-width: 1024px) {
        padding: 0;
      }
`;

const PhotoList = styled.ul`
      display: flex;
      flex-direction: column;
      padding: 0;
      
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
`;

const PhotoItem = styled.li`
      display: flex;
      flex-direction: column;
      padding: 0;
      box-shadow: 0px 2px 2px rgba(0,75,93,0.12);
      border-radius: 8px;
      margin-bottom: 10px;
      
      @media screen and (min-width: 1024px) {
        flex-basis: 47%;
        margin: 10px;
      }
`;

const PhotoImgContainer = styled.div`
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      position: relative;
      z-index: 0;
      min-height: 120px;
      
      @media screen and (min-width: 768px) {
        min-height: 190px;
      }
`;

const PhotoImg = styled.img`
      position: absolute;
      z-index: 0;
      top: -40%;
      left: 0;
      right: 0;
      backface-visibility: hidden;
      will-change: transform;
      max-width: 100%;
`;

const PhotoTextContainer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
`;

const PhotoTextInfo = styled.div`
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-top: 10px;
      margin-bottom: 12px;
      margin-left: 14px;
      position: relative;
      
      @media screen and (min-width: 768px) {
        margin-top: 16px;
      }
`;

const PhotoText = styled.p`
      font-size: 16px;
      line-height: 20px;
      text-align: left;
      color: #5B5B5C;
      max-width: 154px;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 95%;
      
      @media screen and (min-width: 768px) {
        font-size: 22px;
        line-height: 32px;
        padding-left: 44px;
        min-width: 270px;
      }
      
      @media screen and (min-width: 1024px) and (max-width: 1200px) {
        min-width: 200px;
      }
      
      @media screen and (min-width: 1200px) {
        min-width: 300px;
      }
`;

const Flag = styled.img`
      position: absolute;
      left: 0;
      top: 6px;
      height: 30px;
      width: 30px;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 100%;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
      display: none;
    
      @media (min-width: 768px) {
        display: block;
      }
`;

const PhotoSub = styled.p`
      padding-top: 0;
      font-size: 12px;
      line-height: 20px;
      text-align: left;
      color: #A0B0B9;
      margin: 0;
      text-transform: uppercase;
      
      @media screen and (min-width: 768px) {
        padding-left: 44px;
        padding-top: 3px;
      }
`;

const PhotoTextPrice = styled(PhotoTextInfo)`
      width: 50%;
      text-align: right;
      margin-left: 0;
      margin-right: 13px;
`;

const PhotoPrice = styled.button`
      cursor: pointer;
      background-color: transparent;
      border-color: transparent;
      padding-top: 4px;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      color: #00BAE8;
      margin: 0;
      padding-right: 0;
      padding: 0;
      border: transparent;
      
      @media screen and (min-width: 768px) {
        font-size: 22px;
        line-height: 32px;
      }
`;

const PhotoDate = styled.p`
      padding-top: 1px;
      font-size: 12px;
      line-height: 20px;
      text-align: right;
      color: #A0B0B9;
      margin: 0;
      
      @media screen and (min-width: 768px) {
        padding-top: 3px;
      }
      
      @media screen and (min-width: 1024px) {
        padding-top: 0;
      }
`;

export default () => {
    return (
        <SectionPhoto>
            <div className='container'>
                <PhotoList>
                    <PhotoItem>
                        <PhotoImgContainer>
                            <PhotoImg alt='Krasnodar' src={krasnodar} />
                        </PhotoImgContainer>
                        <PhotoTextContainer>
                            <PhotoTextInfo>
                                <Flag src={flagRu} alt='RU'/>
                                <PhotoText>
                                    Краснодар
                                </PhotoText>
                                <PhotoSub>
                                    Россия
                                </PhotoSub>
                            </PhotoTextInfo>
                            <PhotoTextPrice>
                                <PhotoPrice>
                                    Найти от 1212 ₽
                                </PhotoPrice>
                                <PhotoDate>
                                    18 марта
                                </PhotoDate>
                            </PhotoTextPrice>
                        </PhotoTextContainer>
                    </PhotoItem>
                    <PhotoItem>
                        <PhotoImgContainer>
                            <PhotoImg alt='Sochi' src={sochi} />
                        </PhotoImgContainer>
                        <PhotoTextContainer>
                            <PhotoTextInfo>
                                <Flag src={flagRu} alt='RU'/>
                                <PhotoText>
                                    Сочи (Адлер)
                                </PhotoText>
                                <PhotoSub>
                                    Россия
                                </PhotoSub>
                            </PhotoTextInfo>
                            <PhotoTextPrice>
                                <PhotoPrice>
                                    Найти от 1334 ₽
                                </PhotoPrice>
                                <PhotoDate>
                                    27 марта
                                </PhotoDate>
                            </PhotoTextPrice>
                        </PhotoTextContainer>
                    </PhotoItem>
                    <PhotoItem>
                        <PhotoImgContainer>
                            <PhotoImg alt='St.P' src={ptr} />
                        </PhotoImgContainer>
                        <PhotoTextContainer>
                            <PhotoTextInfo>
                                <Flag src={flagRu} alt='RU'/>
                                <PhotoText>
                                    Санкт-Петербург
                                </PhotoText>
                                <PhotoSub>
                                    Россия
                                </PhotoSub>
                            </PhotoTextInfo>
                            <PhotoTextPrice>
                                <PhotoPrice>
                                    Найти от 1508 ₽
                                </PhotoPrice>
                                <PhotoDate>
                                    19 февраля
                                </PhotoDate>
                            </PhotoTextPrice>
                        </PhotoTextContainer>
                    </PhotoItem>
                    <PhotoItem>
                        <PhotoImgContainer>
                            <PhotoImg alt='Min Water' src={minwater} />
                        </PhotoImgContainer>
                        <PhotoTextContainer>
                            <PhotoTextInfo>
                                <Flag src={flagRu} alt='RU'/>
                                <PhotoText>
                                    Минеральные Воды
                                </PhotoText>
                                <PhotoSub>
                                    Россия
                                </PhotoSub>
                            </PhotoTextInfo>
                            <PhotoTextPrice>
                                <PhotoPrice>
                                    Найти от 2074 ₽
                                </PhotoPrice>
                                <PhotoDate>
                                    13 марта
                                </PhotoDate>
                            </PhotoTextPrice>
                        </PhotoTextContainer>
                    </PhotoItem>
                    <PhotoItem>
                        <PhotoImgContainer>
                            <PhotoImg alt='Simf' src={simf} />
                        </PhotoImgContainer>
                        <PhotoTextContainer>
                            <PhotoTextInfo>
                                <Flag src={flagRu} alt='RU'/>
                                <PhotoText>
                                    Симферополь (Крым)
                                </PhotoText>
                                <PhotoSub>
                                    Россия
                                </PhotoSub>
                            </PhotoTextInfo>
                            <PhotoTextPrice>
                                <PhotoPrice>
                                    Найти от 2407 ₽
                                </PhotoPrice>
                                <PhotoDate>
                                    13 марта
                                </PhotoDate>
                            </PhotoTextPrice>
                        </PhotoTextContainer>
                    </PhotoItem>
                    <PhotoItem>
                        <PhotoImgContainer>
                            <PhotoImg alt='Barselona' src={bars} />
                        </PhotoImgContainer>
                        <PhotoTextContainer>
                            <PhotoTextInfo>
                                <Flag src={flagSpain} alt='Spain'/>
                                <PhotoText>
                                    Барселона
                                </PhotoText>
                                <PhotoSub>
                                    Испания
                                </PhotoSub>
                            </PhotoTextInfo>
                            <PhotoTextPrice>
                                <PhotoPrice>
                                    Найти от 4247 ₽
                                </PhotoPrice>
                                <PhotoDate>
                                    24 марта
                                </PhotoDate>
                            </PhotoTextPrice>
                        </PhotoTextContainer>
                    </PhotoItem>
                </PhotoList>
            </div>
        </SectionPhoto>
    )
}
