import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigator from "./components/Navigation/Navbar";
import { Home, Projects, Contact, Resume } from "./pages";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <NavBar/> */}
        <Navigator />
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
        {/* <Route exact path="/saved" component = {SavedRecipes}/> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
