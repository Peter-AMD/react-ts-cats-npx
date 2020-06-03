import { Dispatch } from 'redux';

import catAPI from '../apis/catApi';
import { catMapper } from '../mappers/catsMapper';
import { ActionTypes, Cat } from './';

export interface SetCatAction {
  type: ActionTypes.setCat;
  payload: Cat;
}
export interface GetCatAction {
  type: ActionTypes.getCat;
  payload: Cat;
}

export const setCat = (cat: Cat) => {
  return {
    type: ActionTypes.setCat,
    payload: cat,
  } as SetCatAction;
};

export const getCat = (catId: string) => async (dispatch: Dispatch) => {
  if (!catId) return;
  const catResponse = await catAPI.get<Cat>(`/images/${catId}`, {
    transformResponse: [catMapper],
  });
  dispatch<GetCatAction>({
    type: ActionTypes.getCat,
    payload: catResponse.data,
  });
};
