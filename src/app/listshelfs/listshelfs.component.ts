import { Component, OnInit } from '@angular/core';
import { Shelf } from '../shelfstock/Shelf';
import { ShelfService } from 'src/app/shelf.service';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup,NgForm,Validators} from '@angular/forms';  
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorgeService } from '../token-storage.service';
  

@Component({
  selector: 'app-listshelfs',
  templateUrl: './listshelfs.component.html',
  styleUrls: ['./listshelfs.component.css']
})
export class ListshelfsComponent implements OnInit {

  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 
  //////////////////////////////////////////////////////////////

  public shelfs: Shelf[];
  public editShelf: Shelf;
  public deleteshelf: Shelf;
  
  constructor(private shelfservice: ShelfService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService ){}
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};

      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            this.authorityadmin = true;
            return false;
          } else if (role === 'ROLE_CLIENT') {
            this.authority = 'client';
            this.authorityclient = true;
            return false;
          }else if (role === 'ROLE_DELIVERER') {
            this.authority = 'deliverer';
            this.authoritydeliverer = true;
            return false;
          }else if (role === 'ROLE_MANAGER') {
            this.authority = 'manager';
            this.authoritymanager = true;
            return false;
          }
          this.authority = 'user';
          return true;
        }); }

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

  public onAddShelves(addForm: NgForm): void{
    document.getElementById('add-employee-form').click();
    this.shelfservice.addShelfs(addForm.value).subscribe(
      (response: Shelf) => {
        console.log(response);
        this.getShelves();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();

      }
    )  }


    public onDeleteShelves(shelfId: number): void{
      this.shelfservice.deleteShelfs(shelfId).subscribe(
        (response: void) => {
          console.log(response);
          this.getShelves();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
  
        }
      )  }


    public onUpdateShelves(shelf: Shelf): void{
      this.shelfservice.updateShelfs(shelf).subscribe(
        (response: Shelf) => {
          console.log(response);
          this.getShelves();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )  }
  


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
        this.editShelf = shelf;
        button.setAttribute('data-target','#updateShelfModal')
      }  
      if (mode == 'delete') {
        this.deleteshelf = shelf;
        button.setAttribute('data-target','#deleteShelfModal')
      }  
      container.appendChild(button);
      button.click();   
  }

}
