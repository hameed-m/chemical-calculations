import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsComponent } from './tds.component';


describe('TdsComponent', () => {
  let component: TdsComponent;
  let fixture: ComponentFixture<TdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
