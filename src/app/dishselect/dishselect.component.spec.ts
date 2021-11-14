import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishselectComponent } from './dishselect.component';

describe('DishselectComponent', () => {
  let component: DishselectComponent;
  let fixture: ComponentFixture<DishselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
