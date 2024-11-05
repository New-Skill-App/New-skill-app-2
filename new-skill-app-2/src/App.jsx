import { Route, Routes } from "react-router-dom";
import Header from "./components/bars/Header";
import SideBar from "./components/bars/SideBar";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NotFoundPage from "./components/pages/NotFoundPage";
// import VisualArtsPage from "./components/pages/VisualArtsPage";
import SkillDetailsPage from "./components/pages/SkillDetailsPage";
import CreateSkill from "./components/functionalities/CreateSkill";
import SkillsList from "./components/pages/SkillsList";

function App() {
  const dataLinkVisualArts = "https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills";
  
  return (
    <>
      <SideBar />
      <div className="Main">
        <Header id="header" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visual-arts-page" element={<SkillsList dataLink={dataLinkVisualArts}/>} />
          <Route 
            path="/visual-arts-page/skills/:skillId" 
            element={<SkillDetailsPage dataLink={dataLinkVisualArts} basePath="/visual-arts-page" />} 
          />
          <Route path="/skills/create" element={<CreateSkill dataLink={dataLinkVisualArts}/>} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;