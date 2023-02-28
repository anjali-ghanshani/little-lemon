import './App.css';
import Header from "./components/Header"
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <img src='public/Logo.svg' alt='lttle-lemon-logo' />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
