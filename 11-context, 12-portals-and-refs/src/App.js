import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState('pink');
  return (
    <ThemeContext.Provider value={theme}>
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
              <ThemeContext.Provider value={['green']}>
                <SearchParams />
              </ThemeContext.Provider>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));