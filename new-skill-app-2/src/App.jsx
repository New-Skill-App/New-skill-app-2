import { Route, Routes } from "react-router-dom"

import Header from "./components/bars/Header"
import SideBar from "./components/bars/SideBar"

import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import NotFoundPage from "./components/pages/NotFoundPage"
import SkillDetailsPage from "./components/pages/SkillDetailsPage"
import SkillsListPage from "./components/pages/SkillsListPage"


function App() {

  return (
    <>
      <SideBar />-
      <div className="Main">
        <Header id="header" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visual-arts-page" element={<SkillsListPage dataLink={"https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills"} />} />
          <Route path="/visual-arts-page/skills/:skillId" element={<SkillDetailsPage dataLink={"https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills"} />} />
          {/* <Route path="/sports-page" element={<SkillsList dataLink={""} />} /> */}
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>
    </>
  )
}

export default App
