import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link, Router } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import HomePage from "./homePage/HomePage";
import AuthorsPage from "./authorsPage/AuthorsPage";
import { PrivateRoute } from "./_common/ProtectedRoute";
import { history } from "./_helpers";
import AuthorsDetailsPage from "./authorsPage/AuthorsDetailsPage";
import BooksPage from "./booksPage/BooksPage";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={() => {
            if (window.location.pathname === "/login") return null;
            else
              return (
                <header>
                  <Link to="/">Home </Link> {" | "}
                  <Link to="/authors">Authors</Link> {" | "}
                  <Link to="/books">Books </Link> {" | "}
                  <Link to="/login">Login</Link>
                </header>
              );
          }}
        />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute exact path="/" comp={HomePage} />
          <PrivateRoute exact path="/authors" comp={AuthorsPage} />
          <PrivateRoute exact path="/books" comp={BooksPage} />
          <PrivateRoute path="/author/:id" comp={AuthorsDetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
