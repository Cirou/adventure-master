import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menuOpen = false;
  giocoSubmenuOpen = false;
  ambientazioneSubmenuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.giocoSubmenuOpen = false;
    this.ambientazioneSubmenuOpen = false;
  }

  toggleGiocoSubmenu() {
    this.giocoSubmenuOpen = !this.giocoSubmenuOpen;
  }

  toggleAmbientazioneSubmenu() {
    this.ambientazioneSubmenuOpen = !this.ambientazioneSubmenuOpen;
  }

}
