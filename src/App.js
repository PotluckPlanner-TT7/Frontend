import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Nav from "./components/nav/Nav";
import PotLuck from "./components/potluck/PotLuck";
import Component from "./components/templateComponent/Component";

function App() {
  return (
    <div className="App">
      <Nav />
      <SignUp />
      <LogIn />
      <Switch>
        <Route path="/potlucks" component={PotLuck} />
        {/* <Route path="/sign-up" component={SignUp}/>
        <Route path="/login" component={Login}/> */}
      </Switch>
    </div>
  );
}

export default App;
