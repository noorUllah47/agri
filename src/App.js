/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/



import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Form from "./pages/form";
import CropsDistribution from "./pages/CropsDistribution";
import Form3 from "./pages/Form3";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import OTP from "./pages/OTP";
import LandingPage from "./pages/LandingPage";


function App() {

// axios.defaults.baseURL = '13.228.234.94:8080/v1/'

// axios.defaults.headers =
// {
//   'x-auth-token': localStorage.getItem('token'),
//   'Content-Type': 'application/json'
// }

  return (
    
     <>
     <Router>
     <Routes>
          
         
            
         
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/farmerdata" element={<Form/>}/>

            
          
        </Routes>
        </Router>
  </>
  );
}

export default App;
