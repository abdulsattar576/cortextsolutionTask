 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task1 from './pages/Task1'

 const App = () => {
   return (
     <div>
       <Routes>
        <Route path='/' element={<Task1/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App