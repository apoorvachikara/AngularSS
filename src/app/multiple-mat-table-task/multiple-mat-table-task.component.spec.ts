import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleMatTableTaskComponent } from './multiple-mat-table-task.component';

describe('MultipleMatTableTaskComponent', () => {
  let component: MultipleMatTableTaskComponent;
  let fixture: ComponentFixture<MultipleMatTableTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleMatTableTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleMatTableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
