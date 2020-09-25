import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";

@Component({
  selector: 'mb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  showMenu = false;
  currentUser$: Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.currentUser$ = of()//this.authService.selectCurrentUser();
  }

  logout() {
    // this.authService.logout();
  }
}
