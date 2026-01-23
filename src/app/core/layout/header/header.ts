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

  navegarfilms() {
  this.router.navigate(['/films'], { replaceUrl: true });
}

  navegarPeople() {
  this.router.navigate(['/people'], { replaceUrl: true });
}

}
