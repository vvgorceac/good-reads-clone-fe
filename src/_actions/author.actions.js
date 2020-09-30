import { authorConstants } from "../_contstants";
import { authorService } from "../_services/author.service";

export const authorActions = {
  getAll,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    authorService.getAll().then(
      (authors) => dispatch(success(authors)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: authorConstants.AUTHOR_GETALL_REQUEST };
  }
  function success(authors) {
    return { type: authorConstants.AUTHOR_GETALL_SUCCESS, authors };
  }
  function failure(error) {
    return { type: authorConstants.AUTHOR_GETALL_FAILURE, error };
  }
}
