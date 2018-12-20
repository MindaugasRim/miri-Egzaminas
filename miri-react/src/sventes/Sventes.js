import React, { Component } from "react";
import Svente from "./Svente";
import PropTypes from "prop-types";

class Sventes extends Component {
  render() {
    var sventes = this.props.sventes.map(svente => {
      return (
        <div className="col-sm-4" key={svente.pavadinimas}>
          <Svente
            paveiksliukas={svente.paveiksliukas}
            pavadinimas={svente.pavadinimas}
            aprasymas={svente.aprasymas}
            tipas={svente.tipas}
            kelimas={svente.kelimas}
          />
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">{sventes}</div>
      </div>
    );
  }
}

Sventes.propTypes = {
  sventes: PropTypes.array.isRequired
};

export default Sventes;
