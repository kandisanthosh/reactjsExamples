import React, { Component } from "react";
import FirstComponent from "./components/FirstComponent";
import List from "./components/List";
import Name from "./components/Name";
import Product from "./components/ShoppingCart";
import SecondComponent from "./components/SecondComponent";
import ShoppingCart from "./components/ShoppingCart";
import PropertiesDemo from "./properties/PropertiesDemo";
import DeafultPropertiesDemo from "./properties/DeafultPropertiesDemo";




class App extends Component {
  constructor(args) {
    super();

    this.state = {
      data: [
        {
          name: "santhosh kandi",
        },
        {
          name: "kandi sravanthi",
        },
        {
          name: "kandi sathish",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <Name></Name>
          {this.state.data.map((item)=><List data={item}></List>)}
          <ShoppingCart></ShoppingCart>
          <PropertiesDemo name="Hello Kandi santhosh !! properties Demo !!!"></PropertiesDemo>
          <DeafultPropertiesDemo></DeafultPropertiesDemo>
        </header>
      </div>
    );
  }
}

export default App;
