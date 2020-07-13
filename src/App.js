import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./containters/Home/Home";
import Contact from "./containters/ContactUs/Contact";
import About from "./containters/About/About";
import Posts from "./containters/Posts/Posts";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" component={Home} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/about-us" component={About} />
        <Route path="/posts/:postId" component={Posts} />
      </div>
    </Router>
  );
}

export default App;
