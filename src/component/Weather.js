import React from "react";

class Weather extends React.Component{

  render(){

    return(

    <div > 
     
     { this.props.city && <h1>Today's weather in {this.props.city}</h1>}
     { this.props.temperature && <p>Current Temperature: {this.props.temperature} C</p>}
    { this.props.cityMinTemp && <p>Min temperature: {this.props.cityMinTemp} C</p>}
  { this.props.cityMaxTemp && <p>Max temperature : {this.props.cityMaxTemp} C</p>}
    </div>

      );
  }


};
export default Weather;