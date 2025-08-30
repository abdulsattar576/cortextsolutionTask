 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task1 from './pages/Task1'
import ServiceList from './pages/Task2'
 

 const App = () => {
   return (
     <div>
       <Routes>
        <Route path='/' element={<Task1/>}/>
        <Route path='/task2' element={<ServiceList/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App