import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DewPointComponent } from './dew-point.component';

describe('DewPointComponent', () => {
  let component: DewPointComponent;
  let fixture: ComponentFixture<DewPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DewPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
