import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelSarraComponent } from './add-del-sarra.component';

describe('AddDelSarraComponent', () => {
  let component: AddDelSarraComponent;
  let fixture: ComponentFixture<AddDelSarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDelSarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelSarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
