import { ActionTypes, Cat } from './';

export interface SetCatAction {
  type: ActionTypes.setCat;
  payload: Cat;
}

export const setCat = (cat: Cat) => {
  return {
    type: ActionTypes.setCat,
    payload: cat,
  } as SetCatAction;
};
