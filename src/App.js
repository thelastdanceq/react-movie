import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import React from "react";
import { context } from "./context";


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header />

        <Main />
        <Footer />
      </div>
    )
  };
}

export default App;
