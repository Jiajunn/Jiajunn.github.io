import './App.scss'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DutchAuction from './pages/DutchAuction'
import FoodBuddy from './pages/FoodBuddy'
import MDP from './pages/MDP'
import ParkWhere from './pages/ParkWhere'
import NoPage from './pages/NoPage'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NoPage />,
  },
  {
    path: '/DutchAuction',
    element: <DutchAuction />,
  },
  {
    path: '/FoodBuddy',
    element: <FoodBuddy />,
  },
  {
    path: '/MDP',
    element: <MDP />,
  },
  {
    path: '/ParkWhere',
    element: <ParkWhere />,
  },
])

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />}>
//           <Route path="FoodBuddy" element={<FoodBuddy />} />
//           <Route path="DutchAuction" element={<DutchAuction />} />
//           <Route path="MDP" element={<MDP />} />
//           <Route path="ParkWhere" element={<ParkWhere />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
