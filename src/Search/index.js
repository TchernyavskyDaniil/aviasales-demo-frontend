import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Footer from '../Footer'

class Search extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Aviasales Demo SearchPage</title>
        </Helmet>
        <Footer />
      </div>
    );
  }
}

export default Search;
