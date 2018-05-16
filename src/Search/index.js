import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Footer from '../Footer'
import Header from './Header'

class Search extends Component {
  render() {
    return (
      <div>
          <Helmet>
              <title>
                  Aviasales Demo Search Page
              </title>
          </Helmet>
          <Header />
          <Footer />
      </div>
    );
  }
}

export default Search;
