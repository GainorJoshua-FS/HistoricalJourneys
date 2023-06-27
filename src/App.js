import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import TheGuides from './components/TheGuides';
import Tours from './components/Tours';
import AlertBanner from './components/AlertBanner';
import Camping from './components/Camping';

function App() {
  return (
    <main style={styles.main}>
      <HashRouter>
        <Header />
        <AlertBanner />
          <Routes>
              <Route key="home" path='/' element={<AboutUs/>} />
              <Route key="guides" path='/guides' element={<TheGuides/>} />
              <Route key="tours" path='/tours' element={<Tours/>} />
              <Route key="camping" path='/camping' element={<Camping/>} />
            </Routes>
        <Footer />
        </HashRouter>
    </main>
  );
}

export default App;

const styles = {
  main:{
    textAlign: "left",
  },

}