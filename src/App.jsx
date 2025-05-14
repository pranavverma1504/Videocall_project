

import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Room from './components/Room'
import Homepage from './components/Homepage'

function App() {
  

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/room/:id',
      element:<Room/>
    }
  ])
  return (
<div>
<RouterProvider router={router}/>
</div>
  )
}

export default App
