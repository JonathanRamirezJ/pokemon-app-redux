import {combineReducers} from 'redux';
import {showPokemon} from './users';

const rootReducer = combineReducers({
  pokemon: showPokemon
});

export default rootReducer;
