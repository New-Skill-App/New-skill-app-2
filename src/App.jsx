import { Route, Routes } from "react-router-dom";
import SideBar from "./components/bars/SideBar";
import Footer from "./components/bars/Footer";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SkillDetailsPage from "./components/pages/SkillDetailsPage";
import AddSkillPage from "./components/functionalities/AddSkillPage";
import SkillsList from "./components/pages/SkillsList";
import EditSkillPage from "./components/functionalities/EditSkillPage";

function App() {
  const dataLinkVisualArts = "https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills";
  const dataLinkSports = "https://skills-sports-default-rtdb.europe-west1.firebasedatabase.app/skills"
  const dataLinkMusic = "https://skills-music-default-rtdb.europe-west1.firebasedatabase.app/skills"

  return (
    <div className="d-flex">
      <SideBar />
      <div className="Main">
        {/* <Header id="header" /> */}

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
          <Route path="/skills/add" element={<AddSkillPage dataLink={dataLinkVisualArts} />} />
          <Route path="/visual-arts-page/skills/:skillId/edit" element={<EditSkillPage dataLink={dataLinkVisualArts} />} />

          {/* Sports Related Routes */}
          <Route path="/sports-page" element={<SkillsList dataLink={dataLinkSports} />} />
          <Route
            path="/sports-page/skills/:skillId"
            element={<SkillDetailsPage dataLink={dataLinkSports} basePath="/sports-page" />}
          />
          <Route path="/skills/add" element={<AddSkillPage dataLink={dataLinkSports} />} />
          <Route path="/sports-page/skills/:skillId/edit" element={<EditSkillPage dataLink={dataLinkSports} />} />

          {/* Music Related Routes */}
          <Route path="/music-page" element={<SkillsList dataLink={dataLinkMusic} />} />
          <Route
            path="/music-page/skills/:skillId"
            element={<SkillDetailsPage dataLink={dataLinkMusic} basePath="/music-page" />}
          />

          <Route path="/skills/add" element={<AddSkillPage dataLink={dataLinkMusic} />} />
          <Route path="/music-page/skills/:skillId/edit" element={<EditSkillPage dataLink={dataLinkMusic} />} />

        </Routes>
        <Footer id="footer" />
      </div>
    </div>
  );
}

export default App;