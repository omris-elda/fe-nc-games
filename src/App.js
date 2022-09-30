import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { LoggedIn } from './contexts/loggedin';
import {
  Header, NavBar, ReviewList, Home, Categories, IndvReview, Login, MissingPage
} from "./components";


function App() {
  const [loggedIn, setLoggedIn] = useState("happyamy2016");

  return (
    <LoggedIn.Provider value={{loggedIn, setLoggedIn}} >
    <div className="App">

      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/category/:category" element={<ReviewList />} />
          <Route path="/reviews/:review_id" element={<IndvReview />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<MissingPage />} />
      </Routes>

      </div>
      </LoggedIn.Provider>
  );
}

export default App;
