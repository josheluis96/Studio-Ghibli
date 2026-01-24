import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { label } from '@primeuix/themes/aura/metergroup';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-header',
  imports: [CommonModule, AvatarModule, ButtonModule, ToolbarModule, MenubarModule, BadgeModule, InputTextModule, RippleModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private router = inject(Router);


  items: MenuItem[] | undefined;

  navigatePage(page: String) {
    this.router.navigate(['/' + page], { replaceUrl: true });
  }


  ngOnInit(): void {
    this.items = [
      {
        label: 'Films', command: () => {
          this.router.navigate(['/films']);
        }, icon: 'pi pi-palette'
      },
      {
        label: 'Peoples', command: () => {
          this.router.navigate(['/people']);
        }, icon: 'pi pi-palette'
      },
      {
        label: 'Locations', command: () => {
          this.router.navigate(['/locations']);
        }, icon: 'pi pi-palette'
      },
      {
        label: 'Vehicles', command: () => {
          this.router.navigate(['/vehicles']);
        }, icon: 'pi pi-palette'
      },
      {
        label: 'Species', command: () => {
          this.router.navigate(['/species']);
        }, icon: 'pi pi-palette'
      },
    ];
  }
} 
