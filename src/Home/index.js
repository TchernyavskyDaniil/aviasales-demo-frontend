import React, { Component } from "react";

import Header from './Header';
import ListTraveling from './ListTraveling'
import ListPhoto from './ListPhoto'
import ListBestPrices from './ListBestPrices'


export default () => {
    return (
        <div>
            <Header />
            <ListTraveling />
            <ListPhoto />
            <ListBestPrices />
        </div>
    )
}
