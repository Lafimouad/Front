import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDelSarraComponent } from './update-del-sarra.component';

describe('UpdateDelSarraComponent', () => {
  let component: UpdateDelSarraComponent;
  let fixture: ComponentFixture<UpdateDelSarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDelSarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDelSarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
