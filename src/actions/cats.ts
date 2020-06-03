import { Dispatch } from 'redux';

import { ActionTypes } from './types';
import { catsMapper } from '../mappers/catsMapper';
import catAPI from '../apis/catApi';

export interface FetchCatsAction {
  type: ActionTypes.fetchCats | ActionTypes.clearCats;
  payload: Cat[];
}
export interface Cat {
  id: string;
  url: string;
  height: number;
  width: number;
  name: string;
  origin: string;
  temperament: string;
  description: string;
}

export const fetchCats = (breedId: string, page: number) => async (
  dispatch: Dispatch
) => {
  if (!breedId) return;
  const catsReponse = await catAPI.get('/images/search', {
    params: {
      page,
      limit: 10,
      breed_id: breedId,
    },
    transformResponse: [catsMapper],
  });

  dispatch<FetchCatsAction>({
    type: ActionTypes.fetchCats,
    payload: catsReponse.data,
  });
};

export const clearCats = () => {
  return {
    type: ActionTypes.clearCats,
  };
};
