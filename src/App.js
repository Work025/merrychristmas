import Header from "./Components/Header/Header"
import Main from "../src/Pages/Main/Main";
import Section from "./Pages/Section/Section"
import Article from "./Pages/Article/Article"
import Footer from "./Components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Section />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
