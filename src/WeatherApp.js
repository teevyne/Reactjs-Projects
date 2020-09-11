import React, { Component } from 'react';
import './App.css';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {temp: 0, desc: '', icon: '', loading: true}
  }

  componentDidMount() {
    fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0ef30515c0d3c9a66e28ece263499916')
    .then(response => response.json()) 
    .then(responseData => {
      this.setState({ 
         temp: responseData.main.temp,
        desc: responseData.weather[0].description,
        icon: responseData.weather[0].icon,
        loading: false 
       }); 
    });
  }
  
  render() {
    const imgSrc = 'http://openweathermap.org/img/w/' + this.state.icon + '.png';

    if (this.state.loading) {
      return <p>Loading</p>;
    }
    else {
      return (
        <div className="App">
          <p>Temperature: {this.state.temp} °C</p>
          <p>Description: {this.state.desc}</p>
          <img src={imgSrc} alt="Weather icon" />
        </div>
      );
    }
 }
}

export default WeatherApp;

import React, { Component } from 'react';
import './App.css';
class App extends Component {
constructor(props) {
super(props);
this.state = {temp: 0, desc: '', icon: ''}
}
componentDidMount() {
fetch('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=bfe5ae53a69a94c7f75699db3f7ffaf7')
.then(response => response.json())
.then(responseData => {
this.setState({
temp: responseData.main.temp,
desc: responseData.weather[0].description,
icon: responseData.weather[0].icon
});
});
}
render() {
const imgSrc = 'http://openweathermap.org/img/w/' +
this.state.icon + '.png';