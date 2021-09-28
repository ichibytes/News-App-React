import { BrowserRouter } from "react-router-dom";

import { userContext } from "./Contexts/newsContext";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider>
          <Head />
          <Main />
        </userContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
