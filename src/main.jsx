import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root/Root'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import Support from './Pages/Support/Support'
import Subscriptions from './Pages/Subscriptions/Subscriptions'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/support",
        element: <Support />
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />
      },
    ]

  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
