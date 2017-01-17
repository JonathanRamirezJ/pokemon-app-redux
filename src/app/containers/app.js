import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showPokemon} from '../actions/index';

import Card from '../components/Card';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(showPokemon());
  }

  renderPokemonList() {
    return this.props.pokemon.map((poke, i) => {
      return (
        <Card key={i} name={poke.name} url={poke.url}/>
      );
    });
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h2 className="text-center">Pokemon list V1</h2>
        <ul>
          {this.renderPokemonList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showPokemon, dispatch),
    dispatch
  };
}

App.propTypes = {
  pokemon: PropTypes.array,
  actions: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
