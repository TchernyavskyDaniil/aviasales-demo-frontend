import React from "react";
import { Helmet } from "react-helmet";

import Header from './Header';
import ListTraveling from './Travels'
import ListPhoto from './Photos'
import ListBestPrices from './BestPrices'
import SpecialOffer from './SpecialOffer'
import Desc from './Descriptions'
import Apps from './Apps'
import Footer from '../Footer'
import Slider from './Slider'
import Rss from "./Rss";


export default () => {
    return (
        <div>
          <Helmet>
            <title>
              Home Page
            </title>
          </Helmet>
          <Header />
          <main>
            <ListTraveling />
            <ListPhoto />
            <ListBestPrices />
            <Slider />
            <Rss />
            <SpecialOffer />
            <Desc />
            <Apps />
          </main>
          <Footer />
        </div>
    )
}
