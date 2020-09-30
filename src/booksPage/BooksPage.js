import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bookActions } from "../_actions/book.actions";

class BooksPage extends Component {
  componentDidMount() {
    this.props.dispatch(bookActions.getAll());
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Books page</h1>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>ISBN</th>
                  <th>Name</th>
                  <th>Publish Date</th>
                </tr>
              </thead>
              <tbody>
                {this.props.books &&
                  this.props.books.length > 0 &&
                  this.props.books.map((el) => (
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

function mapStateToProps(state) {
  const { books } = state;
  return {
    books: books.items,
  };
}

export default connect(mapStateToProps)(BooksPage);
