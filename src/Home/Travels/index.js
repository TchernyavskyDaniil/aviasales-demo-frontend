import React, { Component } from 'react';
import styled from 'styled-components';

import compas from './compass.svg'
import change from './pen.svg'
import world from './world.svg'
import sea from './palm.svg'
import shopping from './shopping.svg'
import history from './culture.svg'
import club from './night.svg'
import children from './child.svg'

const Section = styled.section`
      display: flex;
      flex-direction: column;
      background-color: #F8FCFF;
      padding-top: 40px;
      padding-left: 16px;
      padding-right: 16px;
      
      @media screen and (min-width: 768px) {
        padding-top: 56px;
      }
`;

const TravelingHeader = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 18px;
      line-height: 24px;
      
      @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 36px;
      }
`;

const TravelingImg = styled.img`
      display: block;
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
`;

const TravelingText = styled.p`
      margin: 0;
      text-align: center;
      color: black;
`;

const TravelingChangeBtn = styled.button`
      margin: 0;
      text-align: center;
      color: #00ACE2;
      display: flex;
      flex-direction: row;
      align-items: center;
      min-width: 120px;
      justify-content: center;
      background-color: transparent;
      border-color: transparent;
      padding: 0;
      cursor: pointer;
`;

const ChangeImg = styled.img`
      width; 16px;
      height: 16px;
      display: block;
      margin-left: 10px;
`;

const ListTraveling = styled.ul`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 30px;
      padding: 0;
      
      @media screen and (min-width: 768px) {
        justify-content: center;
      }
`;

const ItemTraveling = styled.li`
      display: flex;
      flex-direction: row;
      min-height: 120px;
      flex-basis: 33%
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
      @media screen and (min-width: 768px){
        flex-basis: auto;
        min-width: 96px;
      }
      
      &:hover {
        opacity: 0.8;
      }
      
      & .active {
        color: #5C5C5C;
        border-bottom: 1px solid #00ACE2;
      }
`;

const TravelingImgContainer = styled.div`
      width: 48px; 
      height: 48px;
      display: block;
      position: relative;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 1px 3px 0 rgba(91,137,163,0.15);
`;

const TravelingItemText = styled.p`
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #00ACE2;
      width: 75%;
      text-transform: uppercase; 
`;

const TravelingItemImg = styled.img`
      width: 22px;
      height: 22px;
      background-color: #fff;
      border-radius: 16px;
      position: absolute;
      top: 13px;
      left: 13px;
`;

export class Travels extends Component {
    state = {
        listTraveling: [
            {
                key: 1,
                text: 'Куда угодно',
                img: world,
                alt: 'world',
                active: true
            },
            {
                key: 2,
                text: 'Солнце и море',
                img: sea,
                alt: 'sea',
                active: false
            },
            {
                key: 3,
                text: 'Шопинг, город',
                img: shopping,
                alt: 'shopping',
                active: false
            },
            {
                key: 4,
                text: 'Культура и история',
                img: history,
                alt: 'history',
                active: false
            },
            {
                key: 5,
                text: 'Ночная жизнь',
                img: club,
                alt: 'club',
                active: false
            },
            {
                key: 6,
                text: 'Отдых с детьми',
                img: children,
                alt: 'children',
                active: false
            }
        ]
    };

    render() {
        return (
            <Section>
                <div className='container'>
                    <TravelingHeader>
                        <TravelingImg alt='Compas' src={compas} />
                        <TravelingText>
                            Популярные направления перелетов из города
                        </TravelingText>
                        <TravelingChangeBtn>
                            Москва
                            <ChangeImg alt='Change' src={change} />
                        </TravelingChangeBtn>
                    </TravelingHeader>
                    <ListTraveling>
                    {this.state.listTraveling.map((item) => {
                      return (
                          <ItemTraveling key={item.key}>
                              <TravelingImgContainer>
                                  <TravelingItemImg alt={item.alt} src={item.img}/>
                              </TravelingImgContainer>
                              {item.active ?
                                  <TravelingItemText className='active'>
                                      {item.text}
                                  </TravelingItemText>
                                  :
                                  <TravelingItemText>
                                      {item.text}
                                  </TravelingItemText>
                              }
                          </ItemTraveling>
                      )
                    })}
                    </ListTraveling>
                </div>
            </Section>
        )
    }
}

export default Travels;
