import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Wurzelkomponente der Anwendung. Stellt den Router-Outlet bereit. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
