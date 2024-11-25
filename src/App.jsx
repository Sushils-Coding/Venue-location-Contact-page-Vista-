import Gmap from './components/Gmap.jsx';
import './App.css'
import Contact from './components/Contact.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Gmap/>
    },
    {
      path:'/Contact',
      element: <Contact/>
    }
  ])
 

  return (
    <div className="App">

      <RouterProvider router = {router}/>

    </div>
  )
}

export default App
