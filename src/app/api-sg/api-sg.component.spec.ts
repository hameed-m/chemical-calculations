import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSgComponent } from './api-sg.component';

describe('ApiSgComponent', () => {
  let component: ApiSgComponent;
  let fixture: ComponentFixture<ApiSgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
