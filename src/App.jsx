import React from "react"
import { Routes , Route } from "react-router-dom" 
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Scroll from "./components/Scroll"
import News from "./pages/News"
import New1 from "./pages/war/New1"
import New2 from "./pages/war/New2"
import New3 from "./pages/war/New3"
import Login from "./pages/Login"
import Sign from "./pages/Sign"
import  Profile from "./pages/Profile"
function App (){
    return <div>
        <Scroll/>

    <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>}/>
        <Route  path="/news" element={<News/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/new1" element={<New1/>} />
        <Route path="/new2" element={<New2/>} />
        <Route path="/new3" element={<New3/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/profile" element={<Profile/>} />

        {/* <Route path="/landingPage" element={<LandingPage/>} /> */}
      

        </Routes>
    </div>
}

export default App