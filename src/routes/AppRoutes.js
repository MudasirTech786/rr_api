import { Route, Router, Routes } from "react-router-dom"
import Dashboard from "../Layout/Dashboard";
import Clients from "../modules/clients/components/Clients";
import Projects from "../modules/projects/components/Projects";
import Proposals from "../modules/proposals/components/Proposals";
import Login from "../modules/Login/components/Login";
import Signup from "../modules/Signup/components/Signup";


function AppRoute() {
    return (

                <Routes>
                    {/* <Route path="/" element={<Dashboard />} /> */}
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/clients" element={<Clients/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/proposals" element={<Proposals/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/Signup" element={<Signup/>} />
                </Routes>
    );
}

export default AppRoute;