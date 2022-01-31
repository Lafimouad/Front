import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliverySarraComponent } from './update-delivery-sarra.component';

describe('UpdateDeliverySarraComponent', () => {
  let component: UpdateDeliverySarraComponent;
  let fixture: ComponentFixture<UpdateDeliverySarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeliverySarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeliverySarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
