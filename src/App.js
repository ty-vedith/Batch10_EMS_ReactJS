import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount.js";
import Home from "./components/Home.js";
import ShowAccounts from "./components/ShowAccounts.js";
import { routing } from "./routers/routing.js";
function App() {
  return (
    <BrowserRouter>
      {routing}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/details" component={ShowAccounts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;