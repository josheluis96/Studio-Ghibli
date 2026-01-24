import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class GhibliApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://ghibliapi.vercel.app';


  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/films/${id}`);
  }
  getPeopleId(id: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/people${id}`);
  }
  getLocationId(id: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/locations${id}`);
  }
  getSpecieId(id: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/species${id}`);
  }
  getVehicleId(id: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/vehicles${id}`);
  }
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/films`);
  }
  getPeoples(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/people`);
  }
  getLocations(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/locations`);
  }
  getSpecies(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/species`);
  }
  getVehicles(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/vehicles`);
  }
}
