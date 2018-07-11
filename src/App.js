import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components'

import Home from './Home'
import Search from './Search'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
              <Route path='/' exact component={Home} />
              <Route path='/search' component={Search}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
