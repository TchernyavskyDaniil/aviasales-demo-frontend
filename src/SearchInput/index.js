import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const SearchInput = styled.input`
      padding: 18px 16px;
      border: none;
      color: black;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #ff8e41;
      }
      
      @media screen and (min-width: 768px) {
        border-top-right-radius: 4px;
      }
      
      @media screen and (min-width: 1200px) {
        min-width: 226px;
        border-top-right-radius: 0;
      }
      
      @media screen and (min-width: 1024px) and (max-width: 1200px) {
        max-width: 160px;
        border-top-right-radius: 0;
      }     
`;

const Results = styled.ul`
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 58px;
      z-index: 100;
      box-shadow: 0px 0px 8px rgba(74,74,74,0.2),
                  0px 2px 4px rgba(74,74,74,0.2);
`;

const Container = styled.div`
      display: flex;
      flex-direction: column;
      position: relative; 
      width: 100%;
      justify-content: center;         
`;

const Result = styled.li`
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

const SearchType = styled.p`
      margin: 0;
      position: absolute;
      font-size: 16px;
      line-height: 20px;
      color: #A0B0B9;
      right: 30px;
`;


/**
 * Simple method for autocomplete
 * @param value - Text
 * @param item - Kind of State.example (city)
 * @return text width weight bold
 */

const Bold = ({ value, item }) => {
    const index = item.indexOf(value);

    if (index > -1) {
        // Если город разделен на две части (Денпсанар Бали)

        const partOne = item.substr(0, index);
        const partTwo = item.substr(index + value.length, item.length);

        return <span>{partOne}<b>{value}</b>{partTwo}</span>;
    }

    return item
};

//TODO Говно?

class Places extends Component {
    state = {
        isOpen: false,
        value: '',
        valueType: '',
        findWords: '',
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
                city: 'Сочи',
                country: 'Россия',
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
            },
            {
                city: 'Москва',
                country: 'Россия',
                type: 'MOW',
                key: 9
            }
        ],
    listPlacesNew: [
    ]};

    handleToggleOpen = () => {
        this.setState({
            isOpen: true
        });
    };

    constructor(props) {
        super(props);

        this.handleTextChanged = this.handleTextChanged.bind(this);
    }

    handleTextChanged = e => {
        const className = this.props.className;
        const classValue = document.getElementsByClassName(className);

        this.props.onChangeValue(e);

        const text = classValue[0].value.trim();

        this.setState({
            findWords: text
        });

        // Составляем новый список по нашему value в инпуте

        let itemPlace = '';
        const listPlace = this.state.listPlaces.filter(place => {
            itemPlace = place.city;
            return itemPlace.toLowerCase().search(text.toLowerCase()) !== -1;
        });

        this.setState({listPlacesNew: listPlace});
    };

    handleSelectItem = place => {
        this.props.updateData(place.city);
        this.props.updateType(place.type);

        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            value: place.city,
            valueType: place.type,
        }));
    };

    // Необходимо для корректной работы либы clickoutside

    handleClickOutside = evt => {
        this.setState({
            isOpen: false
        })
    };

    render() {
        return (
            <Container>
                <SearchInput type='text'
                             id='search-input'
                             value={this.props.valueParam}
                             placeholder={this.props.placeholder}
                             className={this.props.className}
                             onChange={this.handleTextChanged}
                             onClick={this.handleToggleOpen}
                />
                <SearchType>
                    {this.props.valueParam.length > 1 ? this.props.typeParam : ''}
                </SearchType>
                {this.state.isOpen && this.props.valueParam.length > 0 && (
                    <Results>
                        {this.state.listPlacesNew.map((place, index) => {
                            if (index < 6) {
                                return <Result key={place.key} onClick={() => this.handleSelectItem(place)}>
                                    <PlaceContainer>
                                        <City>
                                            <Bold value={this.state.findWords} item={place.city} />,
                                        </City>
                                        <Country>
                                            {place.country}
                                        </Country>
                                    </PlaceContainer>
                                    <Type>
                                        {place.type}
                                    </Type>
                                </Result>
                            }

                            return console.log('Success');
                        })}
                    </Results>
                )}
            </Container>
        )
    }
}

export default onClickOutside(Places);

