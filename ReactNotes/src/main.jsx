import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Notes from "./pages/Notes.jsx"
import EditLabels from "./pages/EditLabels.jsx"
import Bin from "./pages/Bin.jsx"




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Notes></Notes>
      },
      {
        path: "EditLabels",
        element: <EditLabels></EditLabels>
      },
      {
        path: "Bin",
        element: <Bin></Bin>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)