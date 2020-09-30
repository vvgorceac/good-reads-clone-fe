import React, { Component } from "react";
import { connect } from "react-redux";
import { authorActions } from "../_actions/author.actions";
import { Link } from "react-router-dom";

class AuthorsPage extends Component {
  componentDidMount() {
    this.props.dispatch(authorActions.getAll());
  }

  render() {
    return (
      <div className="container">
        <h1>Authors page</h1>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.authors.items &&
                this.props.authors.items.length > 0 &&
                this.props.authors.items.map((el) => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.birthDate}</td>
                    <td>
                      <Link to={`/author/${el.id}`}>See books</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authors } = state;
  return {
    authors,
  };
}

export default connect(mapStateToProps)(AuthorsPage);
