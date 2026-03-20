import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Species } from '../../../../core/models/species.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ClickableUrlDirective } from '../../../../shared/directives/clickable-url.directive';

@Component({
  selector: 'app-species-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ClickableUrlDirective],
  templateUrl: './species-card.html',
  styleUrl: './species-card.scss',
})
export class SpeciesCard {
  species = input.required<Species>();
  expandedColors = signal<boolean>(false);
  expandedLinks = signal<boolean>(false);

  protected readonly avatarColors = [
    '#ef4444',
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#8b5cf6',
    '#ec4899',
    '#6366f1',
    '#14b8a6',
  ];

  protected readonly classificationColors: Record<string, string> = {
    Mammal: '#10b981',
    Spirit: '#8b5cf6',
    God: '#fbbf24',
    Dragon: '#ef4444',
    Elk: '#06b6d4',
    Cat: '#ec4899',
    Totoro: '#84cc16',
  };

  protected readonly avatarColor = computed(() => {
    const speciesId = this.species().id;
    const hash = speciesId.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return this.avatarColors[hash % this.avatarColors.length];
  });

  protected readonly classificationColor = computed(() => {
    const classification = this.species().classification;
    return this.classificationColors[classification] || '#64748b';
  });

  protected readonly eyeColorsList = computed(() => {
    return this.parseColors(this.species().eye_colors);
  });

  protected readonly hairColorsList = computed(() => {
    return this.parseColors(this.species().hair_colors);
  });

  parseColors(colorString: string): string[] {
    return colorString
      .split(',')
      .map((color) => color.trim())
      .filter((color) => color.length > 0);
  }

  toggleColors(): void {
    this.expandedColors.update((v) => !v);
  }

  toggleLinks(): void {
    this.expandedLinks.update((v) => !v);
  }

  getColorCode(colorName: string): string {
    const colorMap: Record<string, string> = {
      'Black': '#1f2937',
      'White': '#f3f4f6',
      'Brown': '#92400e',
      'Blonde': '#fcd34d',
      'Blue': '#3b82f6',
      'Green': '#10b981',
      'Hazel': '#b45309',
      'Grey': '#9ca3af',
      'Red': '#ef4444',
      'Golden': '#fbbf24',
      'Purple': '#a78bfa',
      'Silver': '#d1d5db',
      'Pink': '#ec4899',
      'Orange': '#f97316',
      'Yellow': '#eab308',
    };
    return colorMap[colorName] || '#94a3b8';
  }
}
