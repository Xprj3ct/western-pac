import './App.css'
import React, { useState, useEffect } from 'react'
// import CircleLoader from "react-spinners/CircleLoader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BeatLoader } from 'react-spinners';



function App() {
  const [loading, setLoading] = useState( false )

  useEffect (() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <BrowserRouter className="app">
      {loading ? (
        <div id="app-loader">
          <BeatLoader
            color={"white"}
            loading={loading}
            // size={50}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
          <span className="text-orange-100 font-monserrat font-bold my-4">
            Loading.
          </span>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="pt-24 md:pt-30 ">
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
