import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {
  user: any;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser(); // ✅ lowercase a
  }

  logout() {
    this.authService.logout();
  }
}
