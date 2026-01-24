import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-header',
  imports: [CommonModule, AvatarModule, ButtonModule, ToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  menuItems = [
    { label: 'Films', route: 'films', icon: "pi pi-home" },
    { label: 'People', route: 'people', icon: 'pi pi-video' },
    { label: 'Locations', route: 'locations', icon: 'pi pi-video' },
    { label: 'Vehicles', route: 'vehicles', icon: 'pi pi-video' },
    { label: 'Species', route: 'species', icon: 'pi pi-video' }
  ];

  navigatePage(page: String) {
    this.router.navigate(['/' + page], { replaceUrl: true });
  }


} 
