import { Route, Routes } from "react-router-dom"


import Header from "./components/bars/Header"
import SideBar from "./components/bars/SideBar"

import SkillsList from "./components/functionalities/SkillsList"

import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import NotFoundPage from "./components/pages/NotFoundPage"
import VisualArtsPage from "./components/pages/VisualArtsPage"


function App() {

  return (
    <>
      <SideBar />
      <div className="Main">
        <Header id="header" />

        <Routes>
          <Route path="/" element={<HomePage />}/>          
          <Route path="/VisualArtsPage" element={<VisualArtsPage />}/>
          {/* <Route path="/skills/:skillId" element={<SkillDetailsPage />}/> */}
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/update/:skillId" />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>    
    </>
  )
}

export default App
