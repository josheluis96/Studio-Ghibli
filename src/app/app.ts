import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/layout/header/header";
import { ResourceModalComponent } from './shared/components/resource-modal/resource-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ResourceModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('Studio-Ghibli');
}
