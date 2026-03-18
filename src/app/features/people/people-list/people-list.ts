import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Person } from '../../../core/models/person.model';
import { PersonCard } from '../components/person-card/person-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-people-list',
  imports: [CommonModule, ButtonModule, PersonCard],
  templateUrl: './people-list.html',
  styleUrl: './people-list.scss',
})
export class PeopleList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  private readonly destroyRef = inject(DestroyRef);

  people = signal<Person[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadPeople();
  }

  private loadPeople(): void {
    this.isLoading.set(true);
    this.error.set(null);
    this.ghibliService.getPeoples()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.people.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar personas', err);
          this.error.set('No se pudieron cargar las personas. Intenta de nuevo.');
          this.isLoading.set(false);
        },
      });
  }

  retry(): void {
    this.loadPeople();
  }
}


