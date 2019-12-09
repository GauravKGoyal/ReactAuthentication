import React, {useState} from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./styles.css";
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import Login from "./pages/Login";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={false}>
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/admin">Admin page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute  path="/admin" component={Admin} />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
