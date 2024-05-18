import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddemoComponent } from './griddemo.component';

describe('GriddemoComponent', () => {
  let component: GriddemoComponent;
  let fixture: ComponentFixture<GriddemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GriddemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GriddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
