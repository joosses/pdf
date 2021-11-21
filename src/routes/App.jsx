import React from "react";
import CompanyList from "../pages/CompanyList";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import dataJson from "../resources/data.json";
import Template from "../pages/Template";
import { sanitize } from "string-sanitizer";
import replaceSpecialCharacters from "replace-special-characters";

const App = () => {
  const sanitizeName = (name) => {
    name = replaceSpecialCharacters(name);
    name = sanitize.addDash(name);
    name = name.replace(".", "");
    name = name.toLowerCase();
    return name;
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            render={() => <CompanyList /> }
          />
        </Switch>
        
        <Switch>
          {dataJson.map((dataRoutes) => (
            <Route
              key={dataRoutes.id}
              path={`/${sanitizeName(dataRoutes.Name)}`}
              render={() => <Template companyName={dataRoutes.Name} />}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
