import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to='/'>
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path='/details/:id' >
            <Details />
          </Route>
          <Route path='/'>
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));