import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function RootLayout() {
  return (
    <main className="w-full h-screen relative  overflow-x-hidden ">
          <Navbar/>
        <Outlet/>
    </main>
  )
}
