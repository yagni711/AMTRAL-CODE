import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() data: any;
  currentUrl : any;
  showMyContainer: boolean = false;


  constructor(public router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url
      }
    });
  }
  

}
