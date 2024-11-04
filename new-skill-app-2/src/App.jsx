import { Route, Routes } from "react-router-dom"


import Header from "./components/bars/Header"
import SideBar from "./components/bars/SideBar"

import SkillsList from "./components/functionalities/SkillsList"

import AboutPage from "./components/pages/AboutPage"
import NotFoundPage from "./components/pages/NotFoundPage"




function App() {

  return (
    <>
      <SideBar />
      <div className="Main">
        <Header id="header" />

        <Routes>
          <Route path="/" element={<SkillsList />}/>
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
