import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* ROUTING */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
