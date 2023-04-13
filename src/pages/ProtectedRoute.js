import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Define your routes
const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    requiresAuth: true, // requires the user to be authenticated to access this route
  },
  {
    path: "/profile",
    component: Profile,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false, // does not require authentication
  },
  {
    path: "/",
    exact: true,
    component: Home,
    requiresAuth: false,
  },
];

// Define your Higher-Order Component
const PrivateRoute = ({ component: Component, requiresAuth, ...rest }) => {
  const isAuthenticated = true; // replace with your authentication logic
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated || !requiresAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

// Create your app component
const ProtectedRoute = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <PrivateRoute
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
            requiresAuth={route.requiresAuth}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
