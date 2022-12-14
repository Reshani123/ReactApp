import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Footer from './pages/Footer';

// const StyledDiv= styled.div`
//   padding:2%;
//   font-size:20px;
//   text-transform:capitalize;
//   background-color:lightgreen;
// `
// const StyledP= styled.p`

//   font-size:30px;
//   color:Black;
// `

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout />}>
      <Route path="/"  element={<Footer />}/>
      <Route path="home" index element={<Home />}/>
      <Route  path="contact" element={<Contact />}/>
      <Route path="*"   element={<NoPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  //  <StyledDiv>
  //   <StyledP>
  //   styled paraghrap
  //   </StyledP>
  //  </StyledDiv>
  );
}

export default App;
