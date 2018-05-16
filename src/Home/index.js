import React, { Component } from "react";

import Header from '../Header';
import ListTraveling from './ListTraveling'
import ListPhoto from './ListPhoto'
import ListBestPrices from './ListBestPrices'
import SpecialOffer from './SpecialOffer'
import Desc from './Descriptions'
import Apps from './Apps'
import Footer from '../Footer'
import Slider from './Slider'
import Rss from "./Rss";


export default () => {
    return (
        <div>
            <Header />
            <ListTraveling />
            <ListPhoto />
            <ListBestPrices />
            <Slider />
            <Rss />
            <SpecialOffer />
            <Desc />
            <Apps />
            <Footer />
        </div>
    )
}
