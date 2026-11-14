import { RenderMode, ServerRoute } from '@angular/ssr';

/** Alle Routen werden beim Build statisch vorgerendert. */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
