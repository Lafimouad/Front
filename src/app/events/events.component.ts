import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Pool } from '../shelfstock/Pool';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public pools: Pool[];
 
  constructor(private eventsservice: EventsService) { }

  ngOnInit(): void{
    this.getPool();
  } 

  public getPool(): void  {
    this.eventsservice.getPool().subscribe(
      (response: Pool[] ) => {
        this.pools = response;
        console.log(this.pools); },
        (error: HttpErrorResponse) => {
          alert(error.message);
        } 
        
        );

       
    
  }
  
  
}
