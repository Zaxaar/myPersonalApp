import React from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';

import './App.css';

class App extends React.Component {
  render() {
      return (
          <div className="App">
              <Header />
              {this.props.children}
              <Footer />
          </div>
    );
  }
}

export default App;
