import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { Person } from '../models/person.model';
import { LocationData } from '../models/location.model';
import { Vehicle } from '../models/vehicle.model';
import { Species } from '../models/species.model';

@Injectable({
  providedIn: 'root',
})
export class GhibliApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://ghibliapi.vercel.app';


  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/films/${id}`);
  }

  getPersonById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/people/${id}`);
  }

  getLocationById(id: string): Observable<LocationData> {
    return this.http.get<LocationData>(`${this.baseUrl}/locations/${id}`);
  }

  getSpeciesById(id: string): Observable<Species> {
    return this.http.get<Species>(`${this.baseUrl}/species/${id}`);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/vehicles/${id}`);
  }
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/films`);
  }
  getPeoples(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/people`);
  }
  getLocations(): Observable<LocationData[]> {
    return this.http.get<LocationData[]>(`${this.baseUrl}/locations`);
  }
  getSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(`${this.baseUrl}/species`);
  }
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/vehicles`);
  }
}
