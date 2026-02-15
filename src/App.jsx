import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityPage from "./activities/ActivityPage";
import Error404 from "./Error404.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><ActivitiesPage /></Layout>} />
      <Route path="/activities" element={<Layout><ActivitiesPage /></Layout>} />
      <Route path="/activities/:id" element={<Layout><ActivityPage /></Layout>} />
      <Route path="/register" element={<Layout><Register /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="*" element={<Layout><Error404 /></Layout>} />
    </Routes>
  );
}