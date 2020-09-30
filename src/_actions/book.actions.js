import { bookService } from "../_services/book.service";
import { bookConstants } from "../_contstants/index";

export const bookActions = {
  getBooksByAuthorId,
  getAll,
};

function getBooksByAuthorId(id) {
  return (dispatch) => {
    dispatch(request());

    bookService.getBooksByAuthorId(id).then(
      (books) => dispatch(success(books)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: bookConstants.BOOK_GET_BY_AUTHOR__REQUEST };
  }
  function success(books) {
    return { type: bookConstants.BOOK_GET_BY_AUTHOR__SUCCESS, books };
  }
  function failure(error) {
    return { type: bookConstants.BOOK_GET_BY_AUTHOR__FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    bookService.getAll().then(
      (books) => dispatch(success(books)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: bookConstants.BOOK_GETALL_REQUEST };
  }
  function success(books) {
    return { type: bookConstants.BOOK_GETALL_SUCCESS, books };
  }
  function failure(error) {
    return { type: bookConstants.BOOK_GETALL_FAILURE, error };
  }
}
