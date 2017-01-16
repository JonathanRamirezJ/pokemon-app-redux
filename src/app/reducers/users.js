import {SHOW_POKEMON, FIND_ERROR} from '../constants/actionTypes';

const initialState = {
  list: []
};

export function showPokemon(state = initialState, action) {
  switch (action.type) {
    case SHOW_POKEMON:
      return Object.assign({}, state, {list: action.payload});
    case FIND_ERROR:
      return Object.assign({}, state);
    default:
      return state;
  }
}
