import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDropListComponent } from './calendar-drop-list.component';

describe('CalendarDropListComponent', () => {
  let component: CalendarDropListComponent;
  let fixture: ComponentFixture<CalendarDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarDropListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
