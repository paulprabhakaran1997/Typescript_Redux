import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Appliances from './components/Appliances/Appliances';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/404';
import Login from './components/Login/Login';
import PublicRouting from './common/Routing/PublicRouting';
import PrivateRouting from './common/Routing/PrivateRouting';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout';
import Users from './components/Users/Users';

function App() {

  const data = [
    { id: 1, name: "Antony", age: 24 },
    { id: 2, name: "Vinish", age: 26 },
    { id: 3, name: "Aswin", age: 25 },
    { id: 4, name: "Elan", age: 29 },
  ]

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={
            <PublicRouting>
              <Login />
            </PublicRouting>
          } />

          {/* Wrapping All Child Component as Outlet to Layout component  */}

          {/* Start */}

          <Route element={<Layout />}>
            <Route path='/' element={
              <PrivateRouting>
                <Home name='Paul' age={25} friendsList={data} />
              </PrivateRouting>
            } />
            <Route path='/home' element={
              <PrivateRouting>
                <Home name='Paul' age={25} friendsList={data} />
              </PrivateRouting>
            } />
            <Route path='products' element={
              <PrivateRouting>
                <Products />
              </PrivateRouting>
            } />
            <Route path='appliances' element={
              <PrivateRouting>
                <Appliances />
              </PrivateRouting>
            } />
            <Route path='users' element={
              <PrivateRouting>
                <Users />
              </PrivateRouting>
            } />
          </Route>

          {/* End */}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
