import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Donate from '../pages/donate';
import NeedBlood from '../pages/NeedBlood';
import DashboardHome from '../dashboard/DashboardHome';
import ManageDonors from '../dashboard/ManageDonors';
import AdminLogin from '../adminlogin';
import Contact from '../pages/contact';
import About from '../pages/about';
import ManageRequests from '../dashboard/ManageRequests';
import DashboardSetting from '../dashboard/dashboardsettings';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/dashboard/home' element={<Home />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/needblood' element={<NeedBlood />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<AdminLogin />} />
        <Route path='/dashboard/home' element={<DashboardHome />} />
        <Route path='/dashboard/donors' element={<ManageDonors />} />
        <Route path='/dashboard/requests' element={<ManageRequests />} />
        <Route path='/dashboard/settings' element={<DashboardSetting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;