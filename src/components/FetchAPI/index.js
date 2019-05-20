import React from "react";
import "./FetchAPI.scss";
import { ROUTE, BASE_URL } from "./route";
import { Switch, Route, Link } from "react-router-dom";
import { Page404 } from "../../pages/404";
import FetchAPIHome from "./FetchAPIHome";

export default class FetchAPI extends React.Component {
  render() {
    return (
      <div className="fetch-api">
        <Link to={`${BASE_URL}`} component={FetchAPIHome}>
          Back to Fetch-API
        </Link>
        <Switch>
          <Route exact path={`${BASE_URL}`} component={FetchAPIHome} />
          {ROUTE.map(item => (
            <Route
              key={item.id}
              path={`${BASE_URL}${item.path}`}
              component={item.component}
            />
          ))}
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}
