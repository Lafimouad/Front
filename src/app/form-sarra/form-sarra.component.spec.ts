import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSarraComponent } from './form-sarra.component';

describe('FormSarraComponent', () => {
  let component: FormSarraComponent;
  let fixture: ComponentFixture<FormSarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
