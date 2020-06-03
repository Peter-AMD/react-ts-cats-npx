import { ActionTypes, FetchCatsAction, Cat } from '../actions';

export const catsReducer = (state: Cat[] = [], action: FetchCatsAction) => {
  switch (action.type) {
    case ActionTypes.fetchCats:
      const stateCatIds = state.reduce(
        (accum: Array<string>, currentCat: Cat): Array<string> => [
          ...accum,
          currentCat.id,
        ],
        []
      );
      const isIdExisting = action.payload.find((cat) =>
        stateCatIds.includes(cat.id)
      );
      if (isIdExisting) return state;
      return [...state, ...action.payload];

    case ActionTypes.clearCats:
      return [];
    default:
      return state;
  }
};
