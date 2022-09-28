import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Header, NavBar, Reviews, Home, Categories, IndvReview
} from "./components"


function App() {


  return (
    <div className="App">

      <Header />
      <NavBar />

      {/* routing goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/category/:category" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<IndvReview />} />
      </Routes>

    </div>
  );
}

export default App;
