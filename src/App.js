import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { LoggedIn } from './contexts/loggedin';
import {
  Header, NavBar, Reviews, Home, Categories, IndvReview, Login
} from "./components";


function App() {
  const [loggedIn, setLoggedIn] = useState("");

  return (
    <LoggedIn.Provider value={{loggedIn, setLoggedIn}} >
    <div className="App">

      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/category/:category" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<IndvReview />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      </div>
      </LoggedIn.Provider>
  );
}

export default App;
