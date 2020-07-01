import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path={"/projects"} component={Projects} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={["/", "/about"]} component={About} />
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
