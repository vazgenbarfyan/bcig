import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from "./main/Main";

import About from "./pages/about/About";
import Abilities from "./pages/capabilities/Abilities";
import Priorities from "./pages/priorities/Priorities";
import Team from "./pages/team/Team";

import Partners from "./pages/partners/Partners";

import Accreditations from "./pages/ourAchievements/Accreditations";
import CapacityAssessment from "./pages/CapacityAssessment";

import CompletedProjects from "./pages/projects/CompletedProjects";
import CurrentProjects from "./pages/projects/currentProjects/CurrentProjects";
import ProjectPage from "./pages/projects/currentProjects/ProjectPage";
import PlannedProjects from "./pages/projects/plannedProjects/PlannedProjects";

import Beneficiaries from "./pages/beneficiaries/Beneficiaries";

import Announcements from "./pages/Announcements";
import ProgramsProcurement from "./pages/ProgramsProcurement";
import OfficeNeeds from "./pages/OfficeNeeds";

import News from "./pages/news/News";
import SingleNews from "./pages/news/SingleNews";
import PressAboutUs from "./pages/PressAboutUs";
import MediaGallery from "./pages/news/MediaGallery";

import Contacts from "./pages/contacts/Contacts";

const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<Main />} />
            
            <Route path="/about/">
                <Route path="history" element={<About />} />
                <Route path="our-capabilities" element={<Abilities />} />
                <Route path="our-priorities" element={<Priorities />} />
                <Route path="our-team" element={<Team />} />
            </Route>

            <Route path="/partners" element={<Partners />} />

            <Route path="/achievements/">
                <Route path="accreditations" element={<Accreditations />} />
                <Route path="capacity-assessment" element={<CapacityAssessment />} />
            </Route>

            <Route path="/projects/">
                <Route path="completed-projects" element={<CompletedProjects />} />
                <Route path="current-projects" element={<CurrentProjects />} />
                <Route path="current-projects/:id" element={<ProjectPage />} />
                <Route path="planned-projects" element={<PlannedProjects />} />
            </Route>

            <Route path="/results/beneficiaries" element={<Beneficiaries />} />

            <Route path="/procurement/">
                <Route path="procurement-under-the-programs" element={<ProgramsProcurement />} />
                <Route path="procurement-for-the-office-needs" element={<OfficeNeeds />} />
                <Route path="announcements" element={<Announcements />} />
            </Route>

            <Route path="/news/">
                <Route path="news" element={<News />} />
                <Route path="news/:id" element={<SingleNews />} />
                <Route path="the-press-about-us" element={<PressAboutUs />} />
                <Route path="media-gallery" element={<MediaGallery />} />
            </Route>

            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    )
}

export default AppRouter;