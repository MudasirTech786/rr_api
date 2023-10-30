import logo from './logo.svg';
import './App.css';

import Footer from './common/components/Footer/Footer';
import Header from './common/components/Header/Header';
import SideBar from './common/components/Sidebar/Sidebar';
import Dashboard from './Layout/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoute from './routes/AppRoutes';


function App() {
  return (
    <div className="App">

      <Header />
      <SideBar />
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
