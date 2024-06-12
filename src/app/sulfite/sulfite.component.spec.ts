import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SulfiteComponent } from './sulfite.component';

describe('SulfiteComponent', () => {
  let component: SulfiteComponent;
  let fixture: ComponentFixture<SulfiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SulfiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SulfiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
