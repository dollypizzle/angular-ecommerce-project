import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.userSub = this.accountService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.accountService.logout();
  }
}
