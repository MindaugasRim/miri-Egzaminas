import React, { Component } from "react";

import "./App.css";
import Sventes from "./sventes/Sventes";
import europe from "./sventes_design/europe.jpg";
import valentine from "./sventes_design/valentine.jpg";
import kings from "./sventes_design/kings.jpg";

const visos_sventes = [
  {
    paveiksliukas: europe,
    pavadinimas: "Geguzes 9d.",
    aprasymas: "Europos diena",
    tipas: "valstybine",
    kelimas: "Taip"
  },
  {
    paveiksliukas: valentine,
    pavadinimas: "Vasario 14d.",
    aprasymas: "Šv. Valentino diena",
    tipas: "netradicine",
    kelimas: "Ne"
  },
  {
    paveiksliukas: kings,
    pavadinimas: "Sausio 6d",
    aprasymas: "Trys karaliai",
    tipas: "tautines bei religines sventes",
    kelimas: "Ne"
  }
];

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <Sventes sventes={visos_sventes} />
        </div>
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
