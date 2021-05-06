import { Component, OnInit } from '@angular/core';
import { Shelf } from '../shelfstock/Shelf';
import { ShelfService } from 'src/app/shelf.service';

@Component({
  selector: 'app-listshelfs',
  templateUrl: './listshelfs.component.html',
  styleUrls: ['./listshelfs.component.css']
})
export class ListshelfsComponent implements OnInit {

  shelfs: Shelf[] = [];
  constructor(public service: ShelfService) { }

  ngOnInit(): void {
    this.service.getShelfs1().subscribe(
      res => {
        this.shelfs = res;
      }
    );
  }

}
