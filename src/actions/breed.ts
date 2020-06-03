import { ActionTypes, Breeds } from '../actions';

export interface SelectBreedAction {
  type: ActionTypes.selectBreed;
  payload: Breeds;
}

export const selectBreed = (breed: Breeds): SelectBreedAction => {
  return {
    type: ActionTypes.selectBreed,
    payload: breed,
  };
};
