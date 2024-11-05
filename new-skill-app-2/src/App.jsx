import { Route, Routes } from "react-router-dom"

import Header from "./components/bars/Header"
import SideBar from "./components/bars/SideBar"

import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import NotFoundPage from "./components/pages/NotFoundPage"
import VisualArtsPage from "./components/pages/VisualArtsPage"
import SkillDetailsPage from "./components/pages/SkillDetailsPage"


function App() {

  return (
    <>
      <SideBar />-
      <div className="Main">
        <Header id="header" />

        <Routes>
          <Route path="/" element={<HomePage />}/>          
          <Route path="/visual-arts-page/*" element={<VisualArtsPage />}/>
          <Route path="/visual-arts-page/skills/:skillId" element={<SkillDetailsPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>    
    </>
  )
}

export default App
