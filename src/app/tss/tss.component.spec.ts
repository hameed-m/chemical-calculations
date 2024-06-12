import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TssComponent } from './tss.component';

describe('TssComponent', () => {
  let component: TssComponent;
  let fixture: ComponentFixture<TssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
