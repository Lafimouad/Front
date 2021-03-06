import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-deliverer',
  templateUrl: './deliverer.component.html',
  styleUrls: ['./deliverer.component.css']
})
export class DelivererComponent implements OnInit {

  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getDelivererBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}