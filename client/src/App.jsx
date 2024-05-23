import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AddPage from "./pages/AddPage"
import DetailsPage from "./pages/DetailsPage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/add-product" element={<AddPage/>} />
        <Route path="/add-product/:id" element={<DetailsPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
