import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <div className="App">
      <SignUp />
      <LogIn />
    </div>
  );
}

export default App;
