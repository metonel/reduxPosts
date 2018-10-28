import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], //cand luam toate posturile
  item: {} //cand cream un post
};

export default function(state = initialState, action) {
  //evalueaza ce type folosim
  switch (action.type) {
    case FETCH_POSTS: //asta vine din actions/postActions
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
