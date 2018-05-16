import React from 'react';
import styled from 'styled-components';

import vk from './vk.svg';
import facebook from './face.svg';
import insta from './insta.svg';
import twitter from './twitter.svg';
import viber from './viber.svg';
import apple from './store.svg';
import google from './google.svg';
import win from './win.svg';
import arrow from './right-arrow.svg';

const Footer = styled.footer`
      background-color: #fff;
      padding-top: 32px;
      
      @media screen and (min-width: 1024px) {
        padding-left: 140px;
        padding-right: 140px;
      }
`;

const Title = styled.h3`
      color: #4a4a4a;
      font-size: 12px;
      font-weight: 500;
      margin: 0;
      line-height: 16px;
      padding-top: 16px;
      text-align: left;
`;

const List = styled.div`
      display: flex;
      flex-direction: column;
      padding-bottom: 31px;
`;

const Item = styled.a`
      color: #5b5b5c;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding-top: 12px;
      text-decoration: none;
`;

const LinkFooter = Item.extend`
      text-decoration: none;
      padding-right: 9px;
`;

const MainLink = styled.a`
      color: #5b5b5c;
      font-size: 12px;
      font-weight: 600;
      margin: 0;
      line-height: 16px;
      padding-top: 16px;
      text-decoration: none;
      
      &:after {
        content: '';
        display: inline-block;
        background: url(${arrow});
        width: 10px;
        height: 8px;
        padding-left: 15px;
        background-repeat: no-repeat;
        background-position: center;
       }
`;

const AboutFooter = styled.div`
      border-top: 1px solid #e0e6e8;
      
      @media screen and (min-width: 1024px) {
        border-top: none;
      }
`;

const AboutLink = styled.div`
      display: flex;
      flex-wrap: wrap;
      padding-top: 24px;
      
      @media screen and (min-width: 1024px) {
        padding-top: 0;
      }
`;

const SocialNetwork = styled.div`
      padding-top: 16px;
      display: flex;
      flex-wrap: wrap;
`;

const Social = styled.div`
      display: flex;
      flex-wrap: wrap;
      flex-basis: 33%;
      align-items: center;
      padding-bottom: 12px;
      
      @media screen and (min-width: 768px) {
        flex-basis: auto;
      }
`;

const SocialLink = styled.a`
      text-decoration: none;
      color: #4a4a4a;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      text-align: left;
      padding-right: 12px;
`;

const SocialImage = styled.img`
      padding-right: 3px;
`;

const LinkHotel = styled.a`
      text-decoration: none;
      color: #4a4a4a;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      margin: 0;
      display: block;
      padding-top: 24px;
      padding-bottom: 16px;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        padding-top: 16px;
        text-align: left;
      }
`;

const Download = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
      }
`;

const DownloadLink = styled.a`
      padding-bottom: 8px;
      text-decoration: none;
      
      @media screen and (min-width: 768px) {
        padding-right: 10px;
      }
`;

const Image = styled.img``;

const FinalText = styled.p`
      color: #5b5b5c;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding-top: 24px;
      padding-bottom: 24px;
      display: block;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        text-align: left;
      }
`;

const FooterDown = styled.div`
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #e0e6e8;
      }
`;

const FooterLeft = styled.div`
      @media screen and (min-width: 1024px) {
        padding-top: 10px;
      }
`;
const FooterRight = styled.div`
      @media screen and (min-width: 1024px) {
        padding-top: 40px;
      }
`;

export default () => {
    return (
        <Footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            СТРАНЫ
                        </Title>
                        <List>
                            <Item href='#'>
                                Россия
                            </Item>
                            <Item href='#'>
                                Таиланд
                            </Item>
                            <Item href='#'>
                                Черногория
                            </Item>
                            <Item href='#'>
                                Кипр
                            </Item>
                            <Item href='#'>
                                Болгария
                            </Item>
                            <Item href='#'>
                                Гразия
                            </Item>
                            <MainLink href='#'>
                                Все страны
                            </MainLink>
                        </List>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ГОРОДА
                        </Title>
                        <List>
                            <Item href='#'>
                                Москва
                            </Item>
                            <Item href='#'>
                                Санкт-Петербург
                            </Item>
                            <Item href='#'>
                                Симферополь
                            </Item>
                            <Item href='#'>
                                Адлер
                            </Item>
                            <Item href='#'>
                                Екатеринбург
                            </Item>
                            <Item href='#'>
                                Лондон
                            </Item>
                            <MainLink href='#'>
                                Все города
                            </MainLink>
                        </List>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            АВИАКОМПАНИИ
                        </Title>
                        <List>
                            <Item href='#'>
                                Air Berlin
                            </Item>
                            <Item href='#'>
                                Air France
                            </Item>
                            <Item href='#'>
                                Alitalia
                            </Item>
                            <Item href='#'>
                                Air Baltica
                            </Item>
                            <Item href='#'>
                                Emirates
                            </Item>
                            <Item href='#'>
                                KLM
                            </Item>
                            <MainLink href='#'>
                                Все авиакомпании
                            </MainLink>
                        </List>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            АЭРОПОРТЫ
                        </Title>
                        <List>
                            <Item href='#'>
                                Шеремтьево
                            </Item>
                            <Item href='#'>
                                Курумоч
                            </Item>
                            <Item href='#'>
                                Домодедово
                            </Item>
                            <Item href='#'>
                                Толмачево
                            </Item>
                            <Item href='#'>
                                Владивосток
                            </Item>
                            <Item href='#'>
                                Гамбург
                            </Item>
                            <MainLink href='#'>
                                Все аэропорты
                            </MainLink>
                        </List>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            Направления
                        </Title>
                        <List>
                            <Item href='#'>
                                MOW-SIP
                            </Item>
                            <Item href='#'>
                                MOW-AER
                            </Item>
                            <Item href='#'>
                                MOW-TIV
                            </Item>
                            <Item href='#'>
                                MOW-MRV
                            </Item>
                            <Item href='#'>
                                LED-MOW
                            </Item>
                            <Item href='#'>
                                MOW-BKK
                            </Item>
                        </List>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            Сервисы
                        </Title>
                        <List>
                            <Item href='#'>
                                Горящие авибилеты
                            </Item>
                            <Item href='#'>
                                Календар низких цен
                            </Item>
                            <Item href='#'>
                                Карта низких цен
                            </Item>
                            <Item href='#'>
                                Спецпредложение
                            </Item>
                            <Item href='#'>
                                Таблица цен
                            </Item>
                            <Item href='#'>
                                Блог
                            </Item>
                            <Item href='#'>
                                Помощь
                            </Item>
                        </List>
                    </div>
                </div>
                <FooterDown>
                    <FooterLeft>
                        <AboutFooter>
                            <AboutLink>
                                <LinkFooter href='#'>
                                    О компании
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    Партнёрская программа
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    Реклама
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    Вакансии
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    Помощь
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    Правила
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    White Label авиабилеты
                                </LinkFooter>
                            </AboutLink>
                        </AboutFooter>
                        <SocialNetwork>
                            <Social>
                                <SocialImage alt='vk' src={vk} />
                                <SocialLink href='https://vk.com'>
                                    Вконтакте
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialImage alt='face' src={facebook} />
                                <SocialLink href='https://facebook.com'>
                                    Фейсбук
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialImage alt='insta' src={insta} />
                                <SocialLink href='https://instagram.com'>
                                    Инстаграм
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialImage alt='twitter' src={twitter} />
                                <SocialLink href='https://twitter.com'>
                                    Твиттер
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialImage alt='viber' src={viber} />
                                <SocialLink href='https://viber.com'>
                                    Вайбер
                                </SocialLink>
                            </Social>
                        </SocialNetwork>
                        <LinkHotel href='#'>
                            Поиск и бронирование отелей
                        </LinkHotel>
                    </FooterLeft>
                    <FooterRight>
                        <Download>
                            <DownloadLink href='https://www.apple.com/ios/app-store/'>
                                <Image alt='apple' src={apple} />
                            </DownloadLink>
                            <DownloadLink href='https://store.google.com/'>
                                <Image alt='google' src={google} />
                            </DownloadLink>
                            <DownloadLink href='https://www.microsoft.com/store/appsvnext/windows?rtc=1'>
                                <Image alt='win' src={win} />
                            </DownloadLink>
                        </Download>
                        <FinalText>
                            © 2007–2018, Aviasales — дешевые авиабилеты
                        </FinalText>
                    </FooterRight>
                </FooterDown>
            </div>
        </Footer>
    );
};
