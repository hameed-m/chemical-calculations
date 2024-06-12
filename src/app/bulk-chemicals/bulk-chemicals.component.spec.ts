import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkChemicalsComponent } from './bulk-chemicals.component';

describe('BulkChemicalsComponent', () => {
  let component: BulkChemicalsComponent;
  let fixture: ComponentFixture<BulkChemicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkChemicalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkChemicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
