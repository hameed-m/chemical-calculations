import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeChlorineComponent } from './free-chlorine.component';

describe('FreeChlorineComponent', () => {
  let component: FreeChlorineComponent;
  let fixture: ComponentFixture<FreeChlorineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeChlorineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeChlorineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
