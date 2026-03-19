import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import EnvironmentDetailPage from "./pages/EnvironmentDetailPage";
import MedicalDetailPage from "./pages/MedicalDetailPage";
import FoodDetailPage from "./pages/FoodDetailPage";
import NonReimbursablePage from "./pages/NonReimbursablePage";
import SitemapPage from "./pages/SitemapPage";
import RobotsPage from "./pages/RobotsPage";
import RobotsTxtPage from "./pages/RobotsTxtPage";
import SitemapXmlPage from "./pages/SitemapXmlPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  // Layout 없이 직접 렌더링 (먼저 매칭)
  {
    path: "/robots.txt",
    Component: RobotsTxtPage,
  },
  {
    path: "/sitemap.xml",
    Component: SitemapXmlPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "room-detail",
        Component: RoomDetailPage,
      },
      {
        path: "environment-detail",
        Component: EnvironmentDetailPage,
      },
      {
        path: "medical-detail",
        Component: MedicalDetailPage,
      },
      {
        path: "food-detail",
        Component: FoodDetailPage,
      },
      {
        path: "non-reimbursable",
        Component: NonReimbursablePage,
      },
      {
        path: "sitemap",
        Component: SitemapPage,
      },
      {
        path: "robots",
        Component: RobotsPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);