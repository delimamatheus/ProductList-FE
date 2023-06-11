import React, { useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Login } from './pages/Login';

function App() {
  const auth = useContext(AuthContext)

  return (
    <>      
      <div className="flex h-screen">
        <div className='basis-1/6 bg-blue-700 border-r-2 border-black'>
          <Sidebar></Sidebar>
        </div>      

        <div className='basis-5/6 flex flex-col'>
          <div className='bg-yellow-400 h-20 border-b-2 border-black'>
            <Header></Header>
          </div>
          <div className='bg-gray-100 h-screen m-40'>           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product /> }/>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/login" element={<RequireAuth><Logout /></RequireAuth>} /> */}
            </Routes>
          </div>                    
        </div>
      </div>
    </>
  );
}

export default App;