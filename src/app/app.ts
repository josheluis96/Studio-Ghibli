import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Header } from "./core/layout/header/header";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  private translate = inject(TranslateService);
  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
  protected readonly title = signal('Studio-Ghibli');
}
