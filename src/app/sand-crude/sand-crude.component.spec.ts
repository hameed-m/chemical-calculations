import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandCrudeComponent } from './sand-crude.component';

describe('SandCrudeComponent', () => {
  let component: SandCrudeComponent;
  let fixture: ComponentFixture<SandCrudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandCrudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandCrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
