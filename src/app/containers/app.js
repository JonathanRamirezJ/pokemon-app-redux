import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showPokemon} from '../actions/index';
import Card from '../components/Card';

import {Grid} from 'react-bootstrap';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(showPokemon());
  }

  renderPokemonList() {
    return this.props.pokemon.map((poke, i) => {
      return (
        <Card key={i} name={poke.name} url={poke.url} image={poke.imageUrl}/>
      );
    });
  }

  render() {
    return (
      <Grid>
        <h2 className="text-center">Pokemon lists first Generation</h2>
        {this.renderPokemonList()}
      </Grid>
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
