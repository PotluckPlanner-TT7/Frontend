import { Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import PotLuck from "./components/potluck/PotLuck";

import Component from "./components/templateComponent/Component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" component={Component} />
        {/* <Component /> */}
      </Switch>
    </div>
  );
}

export default App;
