import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshelfsComponent } from './listshelfs.component';

describe('ListshelfsComponent', () => {
  let component: ListshelfsComponent;
  let fixture: ComponentFixture<ListshelfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListshelfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshelfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
