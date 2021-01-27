import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarasasComponent } from './sarasas.component';

describe('SarasasComponent', () => {
  let component: SarasasComponent;
  let fixture: ComponentFixture<SarasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
