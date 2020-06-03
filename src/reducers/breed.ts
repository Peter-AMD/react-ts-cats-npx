import { ActionTypes, SelectBreedAction, Breeds } from '../actions';

export const breedReducer = (
  state: Breeds = {} as Breeds,
  action: SelectBreedAction
) => {
  switch (action.type) {
    case ActionTypes.selectBreed:
      return action.payload;
    default:
      return state;
  }
};
