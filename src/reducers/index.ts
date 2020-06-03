import { combineReducers } from 'redux';
import { Cat } from '../actions';
import { breedsReducer } from './breeds';
import { breedReducer } from './breed';
import { catsReducer } from './cats';
import { catReducer } from './cat';
import { Breeds } from '../actions';

export interface StoreState {
  breeds: Breeds[];
  breed: Breeds;
  cats: Cat[];
  cat: Cat;
}

export const reducers = combineReducers<StoreState>({
  breeds: breedsReducer,
  breed: breedReducer,
  cats: catsReducer,
  cat: catReducer,
});
