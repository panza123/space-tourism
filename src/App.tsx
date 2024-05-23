import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/home/Home"
import Destination from "./pages/destination/Destination"
import Crew from "./pages/crew/Crew"
import Technology from "./pages/tech/Technology"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RootLayout/>}>
        <Route path = "/"     element={<Home/>}          />
        <Route path = "destination"     element={<Destination/>}          />
        <Route path = "crew"     element={<Crew/>}          />
        <Route path = "technology"     element={<Technology/>}          />


      </Route>
    
  )
)

  return (
 <>
 <RouterProvider router={router} />
 </>
  )
}

export default App
