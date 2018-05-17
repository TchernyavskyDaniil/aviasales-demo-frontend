import React from "react";
import styled from "styled-components";
import filterIcon from "./filter.svg";
import Aside from "../Filter";
import Cards from "./card";

const Section = styled.section`
      background: #eaeaea;
    
      @media screen and (min-width: 768px) {
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 20px;
      }
    
      @media screen and (min-width: 1024px) {
        display: flex;
        padding-top: 40px;
        padding-bottom: 20px;
      }
`;

const TabletFilter = styled.div`
      text-align: center;
      display: none;
      padding: 10px 0 20px;
    
      @media (min-width: 768px) {
        display: block;
      }
    
      @media (min-width: 1024px) {
        display: none;
      }
`;

const TabletFilterButton = styled.button`
      background: #23a9f6;
      border-radius: 10px;
      cursor: pointer;
      padding: 25px 35px;
      background-repeat: no-repeat;
      border: none;
      background-image: url(${filterIcon});
      background-position: center;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #38d2ff;
      }
`;

const Main = styled.div``;

const Filter = styled.div`
      text-align: center;
      padding: 16px 0;
      
      @media (min-width: 768px) {
        display: none;
      }
`;

const FilterButton = styled.button`
      background: #00ace2;
      opacity: 0.8;
      border-radius: 100px;
      font-weight: 900;
      font-size: 16px;
      text-align: center;
      color: #ffffff;
      border: none;
      padding: 10px 24px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
      }
      
      &:hover {
        opacity: 1;
      }
`;

const ShowMore = styled.button`
      width: 100%;
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
      background-color: #00acde;
      text-align: center;
      padding: 18px 0;
      font-weight: 600;
      border: none;
      border-radius: 4px;
      display: none;
      margin-top: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #38d2ff;
      }
      
      @media (min-width: 768px) {
        display: block;
      }
`;

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      
      @media screen and (min-width: 1024px) {
        flex-direction: row;
      }
`;

export default () => {
  return (
    <Section>
        <div className='container'>
            <Wrapper>
                <TabletFilter>
                    <TabletFilterButton />
                </TabletFilter>
                <Aside />
                <Main>
                    <Cards />
                    <ShowMore>Показать еще 10 билетов!</ShowMore>
                </Main>
                <Filter>
                    <FilterButton>Фильтровать</FilterButton>
                </Filter>
            </Wrapper>
        </div>
    </Section>
  );
}
