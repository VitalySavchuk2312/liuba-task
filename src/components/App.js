import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PostsList from "./PostsList";
import UsersList from "./UsersList";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route path="/users" component={UsersList} />
          <Route path="/:user_posts" component={PostsList} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
