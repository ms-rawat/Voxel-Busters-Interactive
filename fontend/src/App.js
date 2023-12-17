import Main from './components/Main'
import './App.css';
import TemporaryDrawer from './components/Drawer';
import TempCard from './TempCard';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { create } from '@mui/material/styles/createTransitions';
import InsertStartup from './components/InsertStartup';

const router = createBrowserRouter([
  {
    path:'/insert',
    element: <InsertStartup/>
  },
  {
    path:'/',
    element:<Main/>
  }
])

function App() {
  return (
    <div className="App">
  
  
   <RouterProvider router={router}  />
    </div>
  );
}

export default App;
