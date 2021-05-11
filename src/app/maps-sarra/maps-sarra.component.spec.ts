import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsSarraComponent } from './maps-sarra.component';

describe('MapsSarraComponent', () => {
  let component: MapsSarraComponent;
  let fixture: ComponentFixture<MapsSarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsSarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsSarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
