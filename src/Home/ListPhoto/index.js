import React from 'react';
import styled from 'styled-components';

import krasnodar from './krasnodar.jpg';
import bars from './barselona.jpg';
import sochi from './sochi.jpg';
import minwater from './minw.jpg';
import ptr from './spb.jpg';
import simf from './simferopol.jpg';

const SectionPhoto = styled.section`
      display: flex;
      flex-direction: column;
      background-color: #F8FCFF;
      padding-top: 40px;
      padding-left: 16px;
      padding-right: 16px;
`;

const PhotoList = styled.li`
      display: flex;
      flex-direction: column;
`;

const PhotoItem = styled.ul`
      display: flex;
      flex-direction: column;
      padding: 0;
      box-shadow: 0px 2px 2px rgba(0,75,93,0.12);
      border-radius: 8px;
`;

const PhotoImgContainer = styled.div`
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      position: relative;
      z-index: 0;
      min-height: 130px;
`;

const PhotoImg = styled.img`
      position: absolute;
      z-index: 0;
      top: -40%;
      left: 0;
      right: 0;
      transition: transform 1s ease;
      backface-visibility: hidden;
      will-change: transform;
      max-width: 100%;
`;

const PhotoTextContainer = styled.div`
      display: flex;
      flex-direction: row;
`;

const PhotoTextInfo = styled.div`
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-top: 16px;
      margin-bottom: 12px;
      margin-left: 14px;
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
`;

const PhotoSub = styled.p`
      padding-top: 4px;
      font-size: 12px;
      line-height: 20px;
      text-align: left;
      color: #A0B0B9;
      margin: 0;
      text-transform: uppercase; 
`;

const PhotoTextPrice = styled(PhotoTextInfo)`
      width: 50%;
      text-align: right;
      margin-left: 0;
      margin-right: 14px;
`;

const PhotoPrice = styled.p`
      padding-top: 4px;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      color: #00BAE8;
      margin: 0;
`;

const PhotoDate = styled.p`
      padding-top: 4px;
      font-size: 12px;
      line-height: 20px;
      text-align: right;
      color: #A0B0B9;
      margin: 0;
`;

export default () => {
    return (
        <SectionPhoto>
            <PhotoList>
                <PhotoItem>
                    <PhotoImgContainer>
                        <PhotoImg alt='Krasnodar' src={krasnodar} />
                    </PhotoImgContainer>
                    <PhotoTextContainer>
                        <PhotoTextInfo>
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
                            <PhotoText>
                                Миниральные Воды
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
        </SectionPhoto>
    )
}
