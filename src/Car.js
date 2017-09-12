import React, { Component } from 'react';
import './App.css';

class Car extends Component {
  render() {
    const {color, type, yearOfConstruction} = this.props.car
    return (
      <div>
        hello {type} type!
        you are the color {color}
        go back to the year {yearOfConstruction}
      </div>
    );
  }
}

export default Car;
