import React from "react";
import styled from "styled-components";
import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import vkIcon from "./vk.svg";
import rssIcon from "./rss.svg";

const Wrapper = styled.div`
      display: none;
      text-align: center;
      padding: 25px 0 60px 0;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.5;
      
      @media screen and (min-width: 768px) {
        display: block;
      }
    
      @media screen and (min-width: 1024px) {
        margin 0;
        max-width: 100%;
        padding: 20px 0;
      }
`;

const Title = styled.h3`
      font-weight: bold;
      color: #5c5c5c;
      font-size: 16px;
      line-height: 20px;
      text-align: center
      margin-bottom: 0;
      margin-top: 0;
      
      @media screen and (min-width: 1024px) {
        width: 70%;
        text-align: left;
      }
`;

const Subtitle = styled.h4`
      color: #5c5c5c;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      margin-top: 5px;
      margin-bottom: 20px;
      
      @media screen and (min-width: 1024px) {
        width: 60%;
      }
`;

const Socials = styled.div`
      @media screen and (min-width: 768px) {
        padding: 10px 0 24px 0;
        text-align: center;
      }
    
      @media screen and (min-width: 1024px) {
        margin-right: 20px;
        padding-top: 24px;
      }
`;

const Social = styled.a`
      display: inline-block;
      background: #9b9b9b;
      border: 1px solid #979797;
      border-radius: 50px;
      transition: all 0.3s ease;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      margin-right: 5px;
      line-height: 0;
      padding: 8px;
      
      &:hover {
        background-color: #ff9d1b;
        border-color: #ff9d1b;
      }
`;

const SocialIcon = styled.img`
      height: 16px;
      width: 16px;
`;

const Form = styled.div`
      @media screen and (min-width: 1024px) {
        margin: auto;
      }
`;

const Input = styled.input`
      padding: 0 13px;
      height: 34px;
      border: 1px solid #a0b0b9;
      border-right: none;
      
      &:focus {
        outline: none;
      }
`;

const Main = styled.div`
      @media screen and (min-width: 1024px) {
        text-align: left;
        justify-content: center;
        display: flex;
        flex-direction: row;
      }
`;

const Top = styled.div`
      @media screen and (min-width: 768px) {
        width: 60%;
        margin: 0 auto;
      }
       
      @media screen and (min-width: 1024px) {
        text-align: left;
        justify-content: center;
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
        margin-left: 0;
        margin-right: 0;
      }
`;

const Bottom = styled.div`
      @media screen and (min-width: 1024px) {
        text-align: left;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    
      @media screen and (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
      }
`;

const Button = styled.button`
      padding: 7px 13px;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      height: 36px;
      background: #ff8e41;
      border-radius: 2px;
      border: 2px solid #ff8e41;
      
      &:hover {
        background: #ffa353;
      }
      
      &:focus {
        outline: none;
      }
`;

export default () => {
    return (
      <Wrapper>
        <div className="container">
          <Main>
            <Top>
              <Title>
                  Хотите знать всё о скидках на авиабилеты?
              </Title>
              <Subtitle>
                Вы можете подписаться на нашу рассылку через соцсети или по
                электронной почте.
              </Subtitle>
            </Top>
            <Bottom>
              <Socials>
                <Social>
                  <SocialIcon src={twitterIcon} alt="twitter" />
                </Social>
                <Social>
                  <SocialIcon src={facebookIcon} alt="facebook" />
                </Social>
                <Social>
                  <SocialIcon src={vkIcon} alt="vkontakte" />
                </Social>
                <Social>
                  <SocialIcon src={rssIcon} alt="feed" />
                </Social>
              </Socials>
              <Form>
                <Input placeholder="Ваш email" />
                <Button>
                    Подписаться
                </Button>
              </Form>
            </Bottom>
          </Main>
        </div>
      </Wrapper>
    );
}
