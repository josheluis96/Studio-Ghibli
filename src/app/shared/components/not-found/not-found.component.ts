import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1 class="not-found-title">404</h1>
        <h2 class="not-found-subtitle">Página no encontrada</h2>
        <p class="not-found-description">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <button pButton type="button" label="Volver al inicio" (click)="goHome()" class="p-button-primary"></button>
      </div>
    </div>
  `,
  styles: [
    `
      .not-found-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-700) 100%);
        padding: 2rem;
      }

      .not-found-content {
        text-align: center;
        background: white;
        border-radius: 12px;
        padding: 3rem 2rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        max-width: 500px;
      }

      .not-found-title {
        font-size: 5rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        color: var(--primary-color);
      }

      .not-found-subtitle {
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
        color: var(--text-color);
      }

      .not-found-description {
        font-size: 1rem;
        color: var(--text-color-secondary);
        margin-bottom: 2rem;
      }
    `,
  ],
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
