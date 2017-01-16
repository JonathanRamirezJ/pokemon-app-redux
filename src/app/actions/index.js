import {SHOW_POKEMON, FIND_ERROR} from '../constants/actionTypes';
import axios from 'axios';

export function showPokemon() {
  return dispatch => {
    axios
    .get('http://pokeapi.co/api/v2/pokemon/')
    .then(response => dispatch({type: SHOW_POKEMON, payload: response.data.results}))
    .catch(error => dispatch({type: FIND_ERROR, error}));
  };
}
