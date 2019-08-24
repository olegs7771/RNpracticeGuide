import { ADD_PLACE, DELETE_PLACE, CLOSE_PLACE, SELECT_PLACE } from "./types";

export const addPlace = places => {
  return {
    type: ADD_PLACE,
    payload: places
  };
};
export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: key
  };
};

export const closePlace = () => {
  return {
    type: CLOSE_PLACE
  };
};
export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};
