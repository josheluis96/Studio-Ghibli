import { Component, inject, OnInit, signal } from '@angular/core';
import { GhibliApi } from '../../../core/services/ghibli-api';
import { Person } from '../../../core/models/person.model';
import { PersonCard } from '../components/person-card/person-card';

@Component({
  selector: 'app-people-list',
  imports: [PersonCard],
  templateUrl: './people-list.html',
  styleUrl: './people-list.scss',
})
export class PeopleList implements OnInit {
  private readonly ghibliService = inject(GhibliApi);
  people = signal<Person[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.ghibliService.getPeoples().subscribe({
      next: (data) => {
        this.people.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar personas', err);
        this.isLoading.set(false);
      },
    });
  }
}


