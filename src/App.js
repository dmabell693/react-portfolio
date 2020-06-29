import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path={"/projects"}>
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
