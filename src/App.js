import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path={["/", "/about"]} component={About} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/contact"} component={Contact} />
        </Switch>
        <Footer />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
