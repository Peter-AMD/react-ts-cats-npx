import { Dispatch } from 'redux';

import catAPI from '../apis/catApi';
import { breedsMapper } from '../mappers/breedsMapper';
import { ActionTypes } from './types';

export interface Breeds {
  id: string;
  name: string;
}

export interface FetchBreedsAction {
  type: ActionTypes.fetchBreeds;
  payload: Breeds[];
}

export const fetchBreeds = () => async (dispatch: Dispatch) => {
  const breedsReponse = await catAPI.get<Breeds[]>('/breeds', {
    transformResponse: [breedsMapper],
  });
  dispatch<FetchBreedsAction>({
    type: ActionTypes.fetchBreeds,
    payload: breedsReponse.data,
  });
};
