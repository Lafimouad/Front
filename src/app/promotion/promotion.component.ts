import { Component, OnInit } from '@angular/core';
import { Promotion } from '../Promotion';
import { PromotionService } from '../promotion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  public promotions: Promotion[];
  public editPromotion: Promotion;
  public deletePromotion: Promotion;
  constructor(private service:PromotionService) { }

  ngOnInit(): void {
    this.getPromotion();
  }
  public getPromotion(): void {
    this.service.getPromotion().subscribe(
      (response: Promotion[]) => {
        this.promotions = response;
        console.log(this.promotions);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.service.addPromotion(addForm.value).subscribe(
      (response: Promotion) => {
        console.log(response);
        this.getPromotion();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(promotion: Promotion): void {
    this.service.updatePromotion(promotion).subscribe(
      (response: Promotion) => {
        console.log(response);
        this.getPromotion();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(promotionId: number): void {
    this.service.deletePromotion(promotionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPromotion();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Promotion[] = [];
    for (const promotion of this.promotions) {
      if (
       promotion.type_promotion.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(promotion);
      }
    }
    this.promotions = results;
    if (results.length === 0 || !key) {
      this.getPromotion();
    }
  }

  public onOpenModal(promotion: Promotion, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editPromotion = promotion;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deletePromotion = promotion;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}
