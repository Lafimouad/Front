import { Component, OnInit } from '@angular/core';
import { Shelf } from '../shelfstock/Shelf';
import { ShelfService } from 'src/app/shelf.service';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { HttpErrorResponse } from '@angular/common/http';
  

@Component({
  selector: 'app-listshelfs',
  templateUrl: './listshelfs.component.html',
  styleUrls: ['./listshelfs.component.css']
})
export class ListshelfsComponent implements OnInit {

  public shelfs: Shelf[];

  
  constructor(private shelfservice: ShelfService){}
  ngOnInit() {
    this.getShelves();
  }

  public getShelves(): void  {
    this.shelfservice.getShelfs().subscribe(
      (response: Shelf[] ) => {
        this.shelfs = response;
        console.log(this.shelfs); },
        (error: HttpErrorResponse) => {
          alert(error.message);
        } 
        
        );

       
    
  }
  public onOpenModal(shelf: Shelf,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button')
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal')
      if (mode == 'add') {
        button.setAttribute('data-target','#addShelfModal')
      }  
      if (mode == 'edit') {
        button.setAttribute('data-target','#updateShelfModal')
      }  
      if (mode == 'delete') {
        button.setAttribute('data-target','#deleteShelfModal')
      }  
      container.appendChild(button);
      button.click();   
  }

}
