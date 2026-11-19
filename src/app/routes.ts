import type { RouteObject } from "react-router";
import LandingPage from "./pages/LandingPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import EnvironmentDetailPage from "./pages/EnvironmentDetailPage";
import MedicalDetailPage from "./pages/MedicalDetailPage";
import FoodDetailPage from "./pages/FoodDetailPage";
import NonReimbursablePage from "./pages/NonReimbursablePage";
import SitemapPage from "./pages/SitemapPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";

// 브라우저(main.tsx)와 사전 렌더링(entry-server.tsx)이 같은 라우트 정의를 쓴다.
export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "room-detail", Component: RoomDetailPage },
      { path: "environment-detail", Component: EnvironmentDetailPage },
      { path: "medical-detail", Component: MedicalDetailPage },
      { path: "food-detail", Component: FoodDetailPage },
      { path: "non-reimbursable", Component: NonReimbursablePage },
      { path: "sitemap", Component: SitemapPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];
