import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  card: {
    width: "18rem"
  },
  image: {
    height: "200px"
  }
};

class Svente extends Component {
  render() {
    return (
      <div className="card" style={styles.card}>
        <img
          className="card-img-top"
          src={this.props.paveiksliukas}
          alt={this.props.pavadinimas}
          style={styles.image}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.pavadinimas}</h5>
          <h4 className="card-text">{this.props.aprasymas}</h4>
          <p className="card-text">{this.props.tipas}</p>
          <p> ar veliava yra keliama? </p>
          <p className="card-text">{this.props.kelimas}</p>
        </div>
      </div>
    );
  }
}

Svente.propTypes = {
  paveiksliukas: PropTypes.string.isRequired,
  pavadinimas: PropTypes.string.isRequired,
  aprasymas: PropTypes.string.isRequired,
  tipas: PropTypes.string.isRequired,
  kelimas: PropTypes.string.isRequired
};

export default Svente;
