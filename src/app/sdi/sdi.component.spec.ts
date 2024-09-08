import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdiComponent } from './sdi.component';

describe('SdiComponent', () => {
  let component: SdiComponent;
  let fixture: ComponentFixture<SdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
