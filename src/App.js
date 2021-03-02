import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Nav from "./components/nav/Nav";
import PotLuck from "./components/potluck/PotLuck";
import Home from "./components/home/Home";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/potlucks" component={PotLuck} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
