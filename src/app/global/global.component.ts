import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../dictionary';
import {HttpErrorResponse} from '@angular/common/http';
import {ForumService} from '../forum.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  dictionary: Dictionary[];

  constructor(
    private service: ForumService,
  ) {}

  ngOnInit(): void {
    this.getDictionary();

  }
  public getDictionary(): void {
    this.service.getDictionary().subscribe(
      (response: Dictionary[]) => {
        this.dictionary = response;
        console.log('test', this.dictionary);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );
    console.log('test2', this.dictionary);
  }

}
