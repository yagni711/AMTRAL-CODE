import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterModule,HeaderComponent, FooterComponent, DashboardComponent,LoginComponent]
})
export class AppComponent {
  title = 'amtrak';
  data = {
    showHeaderFooter: false,
  };

  constructor(private zone: NgZone, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/register') {
          this.data.showHeaderFooter = false;
        } else {
          this.data.showHeaderFooter = true;
        }
      }
    });
  }
}
