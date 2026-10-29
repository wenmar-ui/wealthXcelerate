import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, '..', p);

const routes = [
  '/',
  '/about',
  '/university',
  '/tv',
  '/books',
  '/login',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
];

async function prerender() {
  console.log('🚀 Starting Static Pre-Rendering (SSG)...');

  const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8');
  
  // Import the server bundle built by Vite SSR
  const { render } = await import(toAbs('dist/server/entry-server.js'));

  for (const route of routes) {
    const helmetContext = {};
    const { html: appHtml, helmet } = render(route, helmetContext);

    // Extract dynamic head elements rendered by react-helmet-async
    const titleStr = helmet?.title?.toString() || '';
    const metaStr = helmet?.meta?.toString() || '';
    const linkStr = helmet?.link?.toString() || '';
    const scriptStr = helmet?.script?.toString() || '';

    const headInjections = [titleStr, metaStr, linkStr, scriptStr].filter(Boolean).join('\n    ');

    let html = template;

    // Inject rendered head elements inside <head>
    if (headInjections) {
      // Replace existing title if Helmet generated one
      if (titleStr) {
        html = html.replace(/<title>.*?<\/title>/s, '');
      }
      html = html.replace('</head>', `  ${headInjections}\n  </head>`);
    }

    // Inject pre-rendered React HTML into #root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Define output path
    const routeDir = route === '/' ? '' : route;
    const destDir = toAbs(`dist${routeDir}`);
    fs.mkdirSync(destDir, { recursive: true });
    const filePath = path.join(destDir, 'index.html');

    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`  ✓ Pre-rendered: ${route} -> ${path.relative(toAbs('dist'), filePath)}`);
  }

  console.log('🎉 Static Pre-rendering completed successfully!');
}

prerender().catch((err) => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
