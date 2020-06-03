import { Cat, SetCatAction, GetCatAction, ActionTypes } from '../actions';

type Action = GetCatAction | SetCatAction;
export const catReducer = (state: Cat = {} as Cat, action: Action) => {
  switch (action.type) {
    case ActionTypes.setCat:
      return action.payload;
    case ActionTypes.getCat:
      return action.payload;
    default:
      return state;
  }
};
