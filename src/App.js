import { BrowserRouter } from "react-router-dom";

import Head from './components/Head'
import Main from './components/Main'
import Footer from './components/Footer'
import './styles/styles.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head />
      <Main />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
