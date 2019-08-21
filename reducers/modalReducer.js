import { CLOSE_MODEL, DELETE_MODEL } from "../action/types";
const initialState = {
  placeName: {},
  places: [],
  selectedPlace: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
