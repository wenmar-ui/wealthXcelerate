import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import AppRoutes from './AppRoutes';

export interface HelmetContext {
  helmet?: HelmetServerState | null;
}

export function render(url: string, helmetContext: HelmetContext = {}) {
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
