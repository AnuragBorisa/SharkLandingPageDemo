
import './App.css';
import { Route,Routes } from "react-router-dom";
// import { initGTM } from './gtm';
import { Home } from './pages/Home';
import Courses from "./pages/Courses"
import { useLocation } from 'react-router-dom';
import ThankYou from './components/Utilites/ThankYouPage/ThankYou';
function App() {
  const location = useLocation();
  return (
   
    <div className="App">
       {/* {initGTM('GTM-TSPT2PMX')}; */}
       <>
       <Routes>
       <Route path="/" element={<Home />} /> 
     <Route path="/courses/:id" element={<Courses key={location.pathname} /> }/>
     <Route path="/thankyou" element={<ThankYou />}></Route>
     </Routes>
     </>
    </div>
  );
}

export default App;
