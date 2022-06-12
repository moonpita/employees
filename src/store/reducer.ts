import { FilterTypes } from '../const';
import { Actions, ActionType, State } from '../types/store';

const initialState = {
  filter: {
    filterName: FilterTypes.Role,
    filterType: 'any',
  },
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeFilter:
      return {
        ...state,
        filter: {
          filterName: action.payload.filterName,
          filterType: action.payload.filterType,
        }
      };
    default:
      return state;
  }
};

export default reducer;
