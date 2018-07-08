 /*
   Hanlin  Xu
   hanlinxu008@gmail.com
  weather program
  version: 1.02
 */

 import React, { Component } from 'react';
import './App.css';
import Weather from "./component/Weather";


class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      cityTemp: [],
      cityMinTemp: [],
      cityMaxTemp: [],
      name: [],
      isLoading: false,
      message: ""
    }
  }

clickedMontreal(){
  this.setState({message: "Loading..."});
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&units=metric&APPID=fbc807633e5f782c53835c458c90f973')
  .then(response => response.json())
  .then(data => {
       
     var city = data; //stores api data in var
     var name = data.name;
     var cityTemp = data.main.temp; 
     var cityMinTemp = data.main.temp_min; 
      var cityMaxTemp = data.main.temp_max; 
      this.setState({
      city: city, //set state
     cityTemp: cityTemp, 
      cityMinTemp: cityMinTemp,
     cityMaxTemp: cityMaxTemp,
      name: name,
      isLoading: true});
     setTimeout(() => {

      this.setState({ 
        isLoading: false,
      message: ""});
     }, 500);
  })
  .catch(error => console.log('parsing failed', error))

}

clickedOttawa(){
  this.setState({message: "Loading..."});

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&APPID=fbc807633e5f782c53835c458c90f973')
  .then(response => response.json())
  .then(data => {
     
     var city = data; //stores api data in var
     var name = data.name;
     var cityTemp = data.main.temp; 
     var cityMinTemp = data.main.temp_min; 
    var cityMaxTemp = data.main.temp_max; 

      this.setState({
      city: city, //set state
      cityTemp: cityTemp, 
      cityMinTemp: cityMinTemp,
      cityMaxTemp: cityMaxTemp,
      name: name,
      isLoading: true});
     setTimeout(() => {
     
      this.setState({ 
        isLoading: false ,
      message: ""});
     }, 500);
  })
  .catch(error => console.log('parsing failed', error))

}

clickedToronto(){
  this.setState({message: "Loading..."});
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&APPID=fbc807633e5f782c53835c458c90f973')
  .then(response => response.json())
  .then(data => {
     
     var city = data; //stores api data in var
     var name = data.name;
     var cityTemp = data.main.temp; 
     var cityMinTemp = data.main.temp_min; 
      var cityMaxTemp = data.main.temp_max; 

      this.setState({
      city: city, //set state
      cityTemp: cityTemp, 
      cityMinTemp: cityMinTemp,
       cityMaxTemp: cityMaxTemp,
      name: name,
      isLoading: true});
      setTimeout(() => {
      
      this.setState({ 
      isLoading: false,
      message: ""});
    }, 500);
  })
  .catch(error => console.log('parsing failed', error))

}

  render() {

    return (
     
  <div className="col-xs-7 form-container">
     
    <button class="button" onClick={(e) => {this.clickedMontreal();}}> Montreal</button>
    <button class="button" onClick={(e) => {this.clickedOttawa();}}> Ottawa</button>
    <button class="button" onClick={(e) => {this.clickedToronto();}}> Toronto</button>
   <div> <h1 >{this.state.message}</h1></div>
    <Weather 
         isLoading={this.state.isLoading}
        temperature={this.state.cityTemp}
         city={this.state.name}
         cityMinTemp= {this.state.cityMinTemp}
         cityMaxTemp= {this.state.cityMaxTemp}
        />
     
</div>
      
    );
  }
}

export default App;