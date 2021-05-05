import { Component, OnInit } from '@angular/core';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-navbar-authorities',
  templateUrl: './navbar-authorities.component.html',
  styleUrls: ['./navbar-authorities.component.css']
})
export class NavbarAuthoritiesComponent implements OnInit {

  private roles: string[];
  public authority: string;

    title = 'sad';
  
  constructor(private tokenStorage: TokenStorgeService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_CLIENT') {
          this.authority = 'client';
          return false;
        }else if (role === 'ROLE_DELIVERER') {
          this.authority = 'deliverer';
          return false;
        }else if (role === 'ROLE_MANAGER') {
          this.authority = 'manager';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
