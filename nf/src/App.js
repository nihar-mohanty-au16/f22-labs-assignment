import "./App.css";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {user ? <Welcome /> : <SignIn />}
        </Route>
        <Route path="/home">{<Welcome/>}</Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>

      {/* <Signup/> */}
      {/* <SignIn /> */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
