import Carousel from "./Components/Carousel";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import React,{useState} from "react";
import ProductsState from "./context/Products/ProductState";
import ProductDes from "./Components/ProductDes";
import Footer from "./Components/Footer";
import LoadingBar from 'react-top-loading-bar'
import Contact from "./Components/Contact";

function App() {
  const [progress, setProgress] = useState(100)

  return (
    <Router>
      <LoadingBar
        color='#5DB7DE'
        height={3}
        waitingTime={100}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ProductsState setProgress={setProgress}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<><Carousel /><Home /></>}/>
          <Route exact path="/productdes" element={<ProductDes />} />
          <Route exact path={`/electronics`} element={<Home category='electronics'/>}/>
          <Route exact path={`/jewelery`} element={<Home category='jewelery'/>}/>
          <Route exact path={`/men`} element={<Home category='men'/>}/>
          <Route exact path={`/women`} element={<Home category='women'/>}/>
          <Route exact path={'/contact'} element={<Contact/>}/>
        </Routes>
        <Footer />
      </ProductsState>
    </Router>
  );
}

export default App;
