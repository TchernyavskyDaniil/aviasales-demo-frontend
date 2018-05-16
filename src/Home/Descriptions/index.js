import React from "react";
import styled from "styled-components";

import plane from "./plane.png";
import mail from "./mail.png";
import list from "./list.png";

const Description = styled.div`
      background-color: #ffffff;
      padding-bottom: 24px;
      
      @media screen and (min-width: 768px) {
        padding-bottom: 34px;
      }
      
      @media screen and (min-width: 1024px) {
        padding-left: 140px;
        padding-right: 140px;
      }
`;

const Title = styled.h2`
      margin: 0;
`;

const TextTitle = styled.p`
      color: #4a4a4a;
      font-size: 13px;
      font-weight: bold;
      margin: 0;
      line-height: 18px;
      padding-top: 16px;
      padding-left: 24px;
      background: url(${plane}) no-repeat left bottom;
`;

const TitleMail = TextTitle.extend`
      background: url(${mail}) no-repeat left bottom;
`;

const TitleList = TextTitle.extend`
      background: url(${list}) no-repeat left bottom;
`;

const MainText = styled.p`
      padding-top: 12px;
      color: #4a4a4a;
      font-size: 14px;    
      text-align: left;
      margin: 0;
      line-height: 20px;
      font-weight: 400;
`;

const MainTextLink = styled.a`
      color: #00ace2;
      padding-left: 10px;
      text-decoration: none;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
      }
`;

export default () => {
    return (
        <Description>
            <div className="container">
                <Title>
                    <TextTitle>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</TextTitle>
                    <MainText>
                        Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
                        самолет по сотням авиакомпаний и находим за считанные минуты самые
                        дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
                        нашим поиском, который совершенно бесплатно сравнивает цены на
                        авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
                        смысла ходить в авиакассы, обзванивать агентства — дешевый билет
                        находится на расстоянии клика. На нашем сайте вы можете подобрать
                        дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы
                        написали для вас простую инструкцию о том, как пользоваться поиском
                        и экономить на перелетах от 1000 до 20 000 руб в год.
                        <MainTextLink href={'#'}>
                            Подбробнее
                        </MainTextLink>
                    </MainText>
                </Title>
                <Title>
                    <TitleMail>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</TitleMail>
                    <MainText>
                        Электронный авиабилет — это, по сути, обычный билет на самолет, но
                        только в менее привычном для путешественника виде. Вся информация об
                        авиаперелете (данные пассажира, маршрут следования) хранится в
                        электронной базе, а пассажир получает на руки маршрут-квитанцию.
                        Некоторые пассажиры, купив авиабилет онлайн и получив
                        маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата
                        А4, на котором распечатана вся информация о предстоящем перелете.
                        Однако это действительно официальный документ, подтверждающий
                        договор между авиаперевозчиком и пассажиром. При регистрации на рейс
                        пассажир должен предъявить маршрут-квитанцию вместе с удостоверением
                        личности точно так же, как предъявляют обыкновенный бумажный билет.
                        Следует отметить, что электронный билет, приобретенный онлайн, стоит
                        дешевле своего бумажного аналога
                        <MainTextLink>
                            Подбробнее
                        </MainTextLink>
                    </MainText>
                </Title>
                <Title>
                    <TitleList>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</TitleList>
                    <MainText>
                        Есть масса путеводителей по странам, но ни одного о том, как
                        провести время в самолете. Для того, чтобы сделать ваш перелет
                        максимально комфортным, мы написали 20 советов о подготовке к
                        путешествию. Ведь настоящее путешествие начинается со слов «Добро
                        пожаловать на борт нашего самолета»!
                        <MainTextLink>
                            Подбробнее
                        </MainTextLink>
                    </MainText>
                </Title>
            </div>
        </Description>
    );
};
