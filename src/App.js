import "./App.css";
import ModulesAssignments from "./components/ModulesAssignments";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* ROUTING */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/moduleAssignments"
            component={ModulesAssignments}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
