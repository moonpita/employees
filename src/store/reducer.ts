import { Actions, ActionType, State } from '../types/store';

const initialState = {
  filter: {
    name: 'asc',
    date: 'asc',
    role: 'any',
    archive: 'false',
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeDate:
      return {
        ...state,
        filter: {
          ...state.filter,
          date: action.payload,
        }
      };
    case ActionType.changeName:
      return {
        ...state,
        filter: {
          ...state.filter,
          name: action.payload,
        }
      };
    case ActionType.changeRole:
      return {
        ...state,
        filter: {
          ...state.filter,
          role: action.payload,
        }
      };
    case ActionType.changeArchive:
      return {
        ...state,
        filter: {
          ...state.filter,
          archive: action.payload,
        }
      };
    default:
      return state;
  }
};

export default reducer;
