import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiketeComponent } from './etikete.component';

describe('EtiketeComponent', () => {
  let component: EtiketeComponent;
  let fixture: ComponentFixture<EtiketeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiketeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiketeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
