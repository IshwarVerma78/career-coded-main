import React from 'react'
import {Routes, Route} from "react-router-dom";

import Home from "../pages/home/Home";
import Categories from "../pages/categories/Categories";
import Courses from "../pages/courses/Courses";
import Instructors from '../pages/instructors/Instructors';
import Contact from '../pages/contact/Contact';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';



const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/instructors' element={<Instructors/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

    </Routes>
  )
}

export default AppRoutes
