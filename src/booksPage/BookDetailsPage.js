import React, { Component } from "react";
import { connect } from "react-redux";
import { bookActions } from "../_actions/book.actions";

class AuthorsPage extends Component {
  componentDidMount() {
    // api/books/author?id=1
    console.log("AUTHOR !!!:" + JSON.stringify(this.props.author));
    console.log("AUTHOR !!!:" + JSON.stringify(this.props.author.id));
    this.props.author &&
      this.props.author.id &&
      this.props.dispatch(bookActions.getBooksByAuthorId(this.props.author.id));
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Author {this.props.author.firstName} Details page</h1>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>ISBN</th>
                  <th>Name</th>
                  <th>Publish Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.booksArr &&
                  this.props.booksArr.length > 0 &&
                  this.props.booksArr.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.isbn}</td>
                      <td>{el.name}</td>
                      <td>{el.publishYear}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { authors, books } = state;
  const author =
    authors.items && authors.items.length > 0
      ? authors.items.find((el) => el.id === parseInt(ownProps.match.params.id))
      : {};

  const booksArr = books.items && books.items.length > 0 ? books.items : [];

  console.log("Authors:" + JSON.stringify(authors.items));
  console.log("Author:" + JSON.stringify(author));
  return {
    author,
    booksArr,
  };
}

export default connect(mapStateToProps)(AuthorsPage);
