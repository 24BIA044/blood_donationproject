import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Donate from '../Admin/donate';
import NeedBlood from './needblood';
import DashboardHome from '../Admin/DashboardHome';
import ManageDonors from '../Admin/ManageDonors';
import AdminLogin from './adminlogin';
import Contact from '../Admin/contact';
import About from '../Admin/about';
import DashboardSetting from '../Admin/dashboardsettings';
import Home from '../Admin/home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/needblood' element={<NeedBlood />} />
                {/* <Route path='/donate' element={<Donate />} /> */}
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path='/dashboard/home' element={<DashboardHome />} />
                <Route path='/dashboard/donors' element={<ManageDonors />} />
                <Route path='/dashboard/settings' element={<DashboardSetting />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;