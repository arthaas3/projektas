import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MokejimasComponent } from './mokejimas.component';

describe('MokejimasComponent', () => {
  let component: MokejimasComponent;
  let fixture: ComponentFixture<MokejimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MokejimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MokejimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
