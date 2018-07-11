import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Footer from '../Footer'
import Header from './Header'
import Results from './Results'

class Search extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>
            Search Page
          </title>
        </Helmet>
        <Header />
        <main>
          <Results />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Search;
