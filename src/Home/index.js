import React, { Component } from "react";

import Header from './Header';
import ListTraveling from './ListTraveling'
import ListPhoto from './ListPhoto'
import ListBestPrices from './ListBestPrices'
import SpecialOffer from './SpecialOffer'
import Desc from './Descriptions'
import Apps from './Apps'


export default () => {
    return (
        <div>
            <Header />
            <ListTraveling />
            <ListPhoto />
            <ListBestPrices />
            <SpecialOffer />
            <Desc />
            <Apps />
        </div>
    )
}
