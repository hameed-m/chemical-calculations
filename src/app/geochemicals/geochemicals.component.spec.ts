import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeochemicalsComponent } from './geochemicals.component';

describe('GeochemicalsComponent', () => {
  let component: GeochemicalsComponent;
  let fixture: ComponentFixture<GeochemicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeochemicalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeochemicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
