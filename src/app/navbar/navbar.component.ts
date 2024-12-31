import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { NavContentComponent } from "./nav-content/nav-content.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [NavContentComponent, AvatarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
