import { Dispatch } from 'redux';

import catAPI from '../apis/catApi';
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
    transformResponse: [
      (data: string) => {
        const parsedData = JSON.parse(data);
        const { id, url, height, width, breeds } = parsedData;
        const { name, origin, temperament, description } = breeds[0];

        return {
          id,
          url,
          height,
          width,
          name,
          origin,
          temperament,
          description,
        };
      },
    ],
  });
  dispatch<GetCatAction>({
    type: ActionTypes.getCat,
    payload: catResponse.data,
  });
};
