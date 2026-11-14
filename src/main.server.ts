import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

/**
 * Startet die Anwendung für das serverseitige Rendering.
 * @param context Bootstrap-Kontext des Servers.
 * @returns Die gestartete Anwendung.
 */
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
