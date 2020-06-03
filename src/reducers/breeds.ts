import { Breeds, ActionTypes, FetchBreedsAction } from '../actions';

export const breedsReducer = (
  state: Breeds[] = [],
  action: FetchBreedsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchBreeds:
      return action.payload;
    default:
      return state;
  }
};
