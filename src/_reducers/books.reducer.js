import { bookConstants } from "../_contstants/book.constants";

export function books(state = {}, action) {
  switch (action.type) {
    case bookConstants.BOOK_GETALL_REQUEST:
      return {
        loading: true,
      };
    case bookConstants.BOOK_GETALL_SUCCESS:
      console.log("Books:" + JSON.stringify(action.authors));
      return {
        items: action.books,
      };
    case bookConstants.BOOK_GETALL_FAILURE:
      return {
        error: action.error,
      };

    case bookConstants.BOOK_GET_BY_AUTHOR__REQUEST:
      return {
        loading: true,
      };
    case bookConstants.BOOK_GET_BY_AUTHOR__SUCCESS:
      return {
        items: action.books,
      };
    case bookConstants.BOOK_GET_BY_AUTHOR__FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
