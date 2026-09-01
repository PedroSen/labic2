import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Live from "../pages/Live";
import Registration from "../pages/Registrations";
import Scheduling from "../pages/Scheduling";
import TheProject from "../pages/TheProject";
import PreviousEditions from "../pages/PreviousEditions";
import Material from "../pages/Material";
import Midia from "../pages/Midia";
import Partners from "../pages/Partners";
import Ebook from "../pages/Ebook";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/site-labic/home" element={<Home />} />
        <Route path="/site-labic/live" element={<Live/>} />
        <Route path="/site-labic/registrations" element={<Registration />} />
        <Route path="/site-labic/scheduling" element={<Scheduling />} />
        <Route path="/site-labic/the-project" element={<TheProject />} />
        <Route path="/site-labic/previous-editions" element={<PreviousEditions/>}/>
        <Route path="/site-labic/parceiros" element={<Partners/>}/>
        <Route path="/site-labic/material" element={<Material/>}/>
        <Route path="/site-labic/midia" element={<Midia/>}/>
        <Route path="/site-labic/ebook" element={<Ebook/>}/>
    </Routes>
);

export default AppRoutes;
