import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Dashboard from './admin/dashboard';
import PrivateRoute from './admin/PrivateRoute'; // assuming you have a PrivateRoute component
import ManageTasks from './pages/admin/ManageTasks';
import Createasks from './pages/admin/Createasks';
import ManageUsers from './pages/admin/ManageUsers';

import Userdashboard from './pages/users/Userdashboard';
import mytasks from './pages/users/mytasks';
import viewtasksdetails from './pages/users/viewtasksdetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin routes */}
          <Route element={<PrivateRoute allowedRoute={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/taks" elemnt={ManageTasks}></Route>
            <Route path="/admin/create-tasks" element={Createasks}></Route>
            <Route path="/admin/users" element={ManageUsers}></Route>
          </Route>          

          <Route element={<PrivateRoute allowedRoute={['admin']} />}>
           <Route path="/user/dashboard" element={<Userdashboard />}></Route>
           <Route path="/user/tasks" elemnent={mytasks} ></Route>
           <Route path="/user/tasks/:id" elemnent={viewtasksdetails}></Route>
          </Route>     
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
