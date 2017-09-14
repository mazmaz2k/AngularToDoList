import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTasksComponent } from './show-all-tasks.component';

describe('ShowAllTasksComponent', () => {
  let component: ShowAllTasksComponent;
  let fixture: ComponentFixture<ShowAllTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
