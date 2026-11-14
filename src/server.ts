import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

/** Pfad zum Ordner mit den gebauten Browser-Dateien. */
const browserDistFolder = join(import.meta.dirname, '../browser');

/** Express-Anwendung des Servers. */
const app = express();
/** Angular-Engine für das serverseitige Rendering. */
const angularApp = new AngularNodeAppEngine();

/** Liefert die statischen Dateien aus dem Ordner browser aus. */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/** Rendert alle übrigen Anfragen mit der Angular-Anwendung. */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Startet den Server, wenn das Modul direkt oder über PM2 ausgeführt wird.
 * Der Port kommt aus der Umgebungsvariable PORT (Standard: 4000).
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/** Request-Handler für die Angular CLI (Dev-Server und Build). */
export const reqHandler = createNodeRequestHandler(app);
