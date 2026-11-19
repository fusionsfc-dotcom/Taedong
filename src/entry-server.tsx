// 빌드 시 각 경로를 정적 HTML로 미리 그리기 위한 서버용 진입점 (scripts/prerender.mjs에서 사용)
import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { routes } from "./app/routes";
import { PAGES, SITE, headTagsFor, canonicalFor } from "./app/seo";

export { PAGES, SITE, headTagsFor, canonicalFor };

export async function render(pathname: string): Promise<string> {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(new Request(`${SITE.url}${pathname}`));
  if (context instanceof Response) {
    throw new Error(`예상하지 못한 리다이렉트: ${pathname}`);
  }
  const router = createStaticRouter(dataRoutes, context);
  return renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
}
