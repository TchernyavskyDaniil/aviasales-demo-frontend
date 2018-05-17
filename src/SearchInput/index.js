import React, { Component } from "react";
import styled from "styled-components";


const ArriveInput = styled.input`
      padding: 18px 16px;
      border: none;
      color: black;
      box-sizing: border-box;
      
      @media screen and (min-width: 768px) {
        border-top-right-radius: 4px;
      }
      
      @media screen and (min-width: 1024px) {
        border-top-right-radius: 0;
      }
`;

const List = styled.ul`
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 56px;
      z-index: 100;
      box-shadow: 0px 2px 2px rgba(0,75,93,0.12);
`;

const Container = styled.div`
      display: flex;
      flex-direction: column;
      position: relative; 
      width: 100%;
      justify-content: center;         
`;

const Item = styled.li`
      min-height: 48px;
      background-color: white;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 15px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      
      &:nth-child(2n) {
        background-color: #F4F4F4;
      }
      
      &:hover {
        border: 1px solid black;
        padding-left: 14px;
        padding-right: 9px;
      }
`;

const City = styled.p`
      margin: 0;
      font-size: 14px;
      line-height: 18px;
      color: #4A4A4A;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
`;

const Country = City.extend`
      color: #A0B0B9;
      padding-left: 5px;
`;

const Type = City.extend`
      font-size: 12px;
      text-align: right;
      color: #A0B0B9;
`;

const PlaceContainer = styled.div`
      display: flex;
      flex-direction: row;
      width: 85%;
`;

class Places extends Component {
    state = {
        isOpen: false,
        listPlaces: [
            {
                city: 'Бангкок',
                country: 'Таиланд',
                type: 'BKK',
                key: 1
            },
            {
                city: 'Барселона',
                country: 'Испания',
                type: 'BCN',
                key: 2
            },
            {
                city: 'Баландино',
                country: 'Россия',
                type: 'CEK',
                key: 3
            },
            {
                city: 'Бандаранаике',
                country: 'Коломбо',
                type: 'CMB',
                key: 4
            },
            {
                city: 'Батуми',
                country: 'Грузия',
                type: 'BUS',
                key: 5
            },
            {
                city: 'Денпсанар Бали',
                country: 'Индонезия',
                type: 'DPS',
                key: 6
            },
            {
                city: 'Краснодар',
                country: 'Россия',
                type: 'KRS',
                key: 7
            },
            {
                city: 'Париж',
                country: 'Франция',
                type: 'FRN',
                key: 8
            }
        ],
    listPlacesNew: [

    ]};

    toggleOpen = () => {
        this.setState({ isOpen: true });
    };

    constructor() {
        super();
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = () => {
        this.setState({ isOpen: false })
    };

    onTextChanged(e) {
        const text = e.target.value.trim();

        let itemPlace = '';
        const listPlace = this.state.listPlaces.filter(place => {
            itemPlace = place.city + ' ' + place.country;
            return itemPlace.toLowerCase().search(text.toLowerCase()) !== -1;
        })

        this.setState({listPlacesNew: listPlace});

        console.log(this.state.listPlacesNew);
        // const filteredList = this.state.listPlaces[0].city;
    }

    render() {
        return (
            <Container>
                <ArriveInput placeholder='Город прибытия' onChange={this.onTextChanged} onClick={this.toggleOpen}/>
                {this.state.isOpen && (
                    <List>
                        {this.state.listPlacesNew.map(place => {
                            return <Item key={place.key}>
                                <PlaceContainer>
                                    <City>
                                        {place.city},
                                    </City>
                                    <Country>
                                        {place.country}
                                    </Country>
                                </PlaceContainer>
                                <Type>
                                    {place.type}
                                </Type>
                            </Item>
                        })}
                    </List>
                )}
            </Container>
        )
    }
}

export default Places;

