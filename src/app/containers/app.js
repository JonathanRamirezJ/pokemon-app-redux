import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {showPokemon} from '../actions/index';

class App extends Component {

  componentWillMount() {
    this.props.showPokemon();
  }

  renderPokemonList() {
    return this.pokemons.map((user, i) => {
      return (
        <div key={i} className="card col-xs-12 col-md-3 col-sm-3">
          <div className="card-block">
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary text-center">Go</a>
          </div>
        </div>
      );
    });
  }

  render() {
    const pokemonsList = this.pokemons ? this.pokemons.map((pokemon, i) => {
      return (
        <div key={i} className="card col-xs-12 col-md-3 col-sm-3">
          <div className="card-block">
            <h4 className="card-title">{pokemon.name}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="btn btn-primary text-center">Go</a>
          </div>
        </div>
      );
    }) : 'No hay datos a mostrar';

    return (
      <div>
        <h2>Pokemon list V1</h2>
        <ul>
          {pokemonsList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemon.list
  };
}

App.propTypes = {
  showPokemon: PropTypes.func
};

export default connect(mapStateToProps, {showPokemon})(App);
