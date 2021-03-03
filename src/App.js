import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Nav from "./components/nav/Nav";
import MyPotLuck from "./components/potluck/MyPotLuck";
import Home from "./components/home/Home";
import PrivateRoute from "./utils/PrivateRoute";
import Add from "./components/add/Add";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/my-potlucks" component={MyPotLuck} />
        <PrivateRoute path="/add-potluck" component={Add} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
