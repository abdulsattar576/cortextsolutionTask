 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task1 from './pages/Task1'
import ServiceList from './pages/Task2'
import FAQList from './pages/Task3'
 

 const App = () => {
   return (
     <div>
       <Routes>
        <Route path='/' element={<Task1/>}/>
        <Route path='/task2' element={<ServiceList/>}/>
        <Route path='/task3' element={<FAQList/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App