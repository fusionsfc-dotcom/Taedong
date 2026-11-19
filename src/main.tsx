import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./app/routes";
import "./styles/index.css";

const container = document.getElementById("root")!;
const router = createBrowserRouter(routes);
const app = <RouterProvider router={router} />;

// 사전 렌더링된 HTML이 있으면 이어받고(hydrate), 없으면(개발 서버) 새로 그린다.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
