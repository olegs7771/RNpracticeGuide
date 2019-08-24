import {
  SELECT_PLACE,
  DELETE_PLACE,
  CLOSE_PLACE,
  ADD_PLACE
} from "../action/types";
const initialState = {
  places: [],
  selectedPlace: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.payload)
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.payload;
        })
      };
    case CLOSE_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(item => {
          return item.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    default:
      return state;
  }
}
