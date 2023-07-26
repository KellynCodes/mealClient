import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UserDto } from '../../data/Dto/auth/user.dto';
import { JwtService } from '../../utils/jwt.service';

@Component({
  selector: 'meal-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user!: UserDto | undefined;
  userId!: string;
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['userId'];
    this.userService.getUser(this.userId).subscribe({
      next: (response) => {
        this.user = response.data;
        console.log(this.user?.username);
      },
      error: (err) => {
        console.log('Error getting the current logged in user');
      },
    });
  }

  logout(): void {
    if (this.authService.logout()) {
      window.location.assign('');
    }
  }
}
