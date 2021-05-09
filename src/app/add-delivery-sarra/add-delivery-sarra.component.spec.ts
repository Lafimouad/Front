import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliverySarraComponent } from './add-delivery-sarra.component';

describe('AddDeliverySarraComponent', () => {
  let component: AddDeliverySarraComponent;
  let fixture: ComponentFixture<AddDeliverySarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeliverySarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeliverySarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
