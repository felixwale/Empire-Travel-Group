import './App.css';
import Gallery from './pages/Gallery/Gallery';
import SignIn from './pages/Sign_In/Sign_In';
import SignUp from './pages/Sign_Up/Sign_Up';
import Contact from './pages/Contact_Us/Contact';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element ={ <Gallery/>} />
      <Route path="/Sign_In" element ={ <SignIn/>} />
      <Route path="/Sign_Up" element ={ <SignUp/>} />
      <Route path="/Contact" element ={ <Contact/>} />
    </Routes>
  );
}

export default App;
