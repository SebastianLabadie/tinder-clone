import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import TinderCards from './components/TinderCards'

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <Footer />
    </div>
  );
}

export default App;
