import { authorConstants } from "../_contstants";

export function authors(state = {}, action) {
  switch (action.type) {
    case authorConstants.AUTHOR_GETALL_REQUEST:
      return {
        loading: true,
      };
    case authorConstants.AUTHOR_GETALL_SUCCESS:
      console.log("Authors:" + JSON.stringify(action));
      return {
        items: action.authors,
      };
    case authorConstants.AUTHOR_GETALL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
