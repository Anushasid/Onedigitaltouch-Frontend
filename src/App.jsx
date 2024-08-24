 import { useState } from 'react'
import Home from './Component/Home'
import Contact from './Component/Contact'
import { Routes, Route } from "react-router-dom";
import Signup from './Component/Registration/Signup';
import Signin from './Component/Registration/Signin';
import Notifications from './Component/Notifications';
import Services from './Component/Services';
import Locations from './Component/Locations';
import Layout from './Component/Layout/Layout';
import ForgotPassword from './Component/ForgotPassword';
import WebsitePolicies from './Component/WebsitePolicies';
import  Feedback  from './Component/Feedback';
import Electricitybill from './Component/Electricitybill';
import Waterbill from './Component/Waterbill';
import Userprofile from './Component/Userprofile';
import ElectricityInvoice from './Component/ElectricityInvoice';
import WaterInvoice from './Component/WaterInvoice';
import GlobalNotifications from './Component/GlobalNotifications';
import Abouthubli from './Component/Abouthubli';
import Silentfeatures from './Component/Silentfeatures';
import Aboutonebilling from './Component/Aboutonebilling';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouthubli" element={<Abouthubli />} />
        <Route path="/aboutonebilling" element={<Aboutonebilling />} />
        <Route path="/silentfeatures" element={<Silentfeatures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/globalnotifications" element={<GlobalNotifications/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/websitepolicy" element={<WebsitePolicies/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/electricitybill" element={<Electricitybill/>}/>
        <Route path="/waterbill" element={<Waterbill/>}/>
        <Route path="/userprofile" element={<Userprofile/>}/>
        <Route path="/electricityinvoice" element={<ElectricityInvoice/>}/>
        <Route path="/waterinvoice" element={<WaterInvoice/>}/>

        
      </Routes>
    </Layout>
 
     

    </>
  )
}

export default App
