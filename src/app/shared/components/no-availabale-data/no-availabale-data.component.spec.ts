import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAvailabaleDataComponent } from './no-availabale-data.component';

describe('NoAvailabaleDataComponent', () => {
  let component: NoAvailabaleDataComponent;
  let fixture: ComponentFixture<NoAvailabaleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAvailabaleDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAvailabaleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
