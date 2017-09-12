import React, { Component } from 'react';
import logo from './logo.svg';
import Car from './Car'
import './App.css';

class App extends Component {
  state = {
   "carStock":[
      {
         "color":"red",
         "type":"Porsche 911",
         "yearOfConstruction":2000,
         "price":60000
      },
      {
         "color":"black",
         "type":"Porsche Panamera",
         "yearOfConstruction":2010,
         "price":120000
      },
      {
         "color":"green",
         "type":"VW Beetle",
         "yearOfConstruction":1960,
         "price":8000,
         "notes":"damaged at the front bumper"
      },
      {
         "color":"blue",
         "type":"Audi A5",
         "yearOfConstruction":1998,
         "price":28345
      },
      {
         "color":"yellow",
         "type":"Ferrari 430 Spider",
         "yearOfConstruction":1990,
         "price":80435
      },
      {
         "color":"gray",
         "type":"Audi Commodore",
         "yearOfConstruction":1992,
         "price":8212
      }
   ]
}
  componentWillMount() {
    // load your data
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>car list</h2>
        </div>
        {this.state.carStock.map((car) => {
          return <Car car={car} />
        })}
      </div>
    );
  }
}

export default App;
