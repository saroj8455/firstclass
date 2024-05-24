import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoneditorComponent } from './jsoneditor.component';

describe('JsoneditorComponent', () => {
  let component: JsoneditorComponent;
  let fixture: ComponentFixture<JsoneditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsoneditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsoneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
