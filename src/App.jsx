import { Route, Routes } from "react-router-dom";
import Header from "./components/bars/Header";
import SideBar from "./components/bars/SideBar";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SkillDetailsPage from "./components/pages/SkillDetailsPage";
import CreateSkill from "./components/functionalities/CreateSkill";
import SkillsList from "./components/pages/SkillsList";
import EditSkillPage from "./components/functionalities/EditSkillPage";

function App() {
  const dataLinkVisualArts = "https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills";
  const dataLinkSports = "https://skills-sports-default-rtdb.europe-west1.firebasedatabase.app/skills"

  return (
    <div className="d-flex">
      <SideBar />
      <div className="Main">
        <Header id="header" />

        <Routes>
          {/* General Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          
          
          {/* Visual Arts Related Routes */}
          <Route path="/visual-arts-page" element={<SkillsList dataLink={dataLinkVisualArts} />} />
          <Route
            path="/visual-arts-page/skills/:skillId"
            element={<SkillDetailsPage dataLink={dataLinkVisualArts} basePath="/visual-arts-page" />}
          />
          <Route path="/skills/create" element={<CreateSkill dataLink={dataLinkVisualArts} />} />
          <Route path="/visual-arts-page/skills/:skillId/edit" element={<EditSkillPage dataLink={dataLinkVisualArts} />} />

          {/* Sports Related Routes */}
          <Route path="/sports-page" element={<SkillsList dataLink={dataLinkSports} />} />
          <Route
            path="/sports-page/skills/:skillId"
            element={<SkillDetailsPage dataLink={dataLinkSports} basePath="/sports-page" />}
          />
          <Route path="/skills/create" element={<CreateSkill dataLink={dataLinkSports} />} />
          <Route path="/sports-page/skills/:skillId/edit" element={<EditSkillPage dataLink={dataLinkSports} />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;