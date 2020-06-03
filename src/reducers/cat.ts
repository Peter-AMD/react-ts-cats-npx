import { Cat, SetCatAction, ActionTypes } from '../actions';

export const catReducer = (state: Cat = {} as Cat, action: SetCatAction) => {
  switch (action.type) {
    case ActionTypes.setCat:
      return action.payload;
    default:
      return state;
  }
};
