import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/** Zusätzliche Provider für das serverseitige Rendering. */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

/** Zusammengeführte Konfiguration für Server-Side-Rendering und Prerendering. */
export const config = mergeApplicationConfig(appConfig, serverConfig);
