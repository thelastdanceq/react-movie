import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import React from "react";


class App extends React.Component {
  constructor() {
    super();

  }




  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Footer />
      </div>
    )
  };
}

export default App;
