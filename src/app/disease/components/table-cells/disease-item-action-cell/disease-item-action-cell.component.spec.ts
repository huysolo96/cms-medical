import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActicleItenActionCellComponent } from './disease-iten-action-cell.component';

describe('ActicleItenActionCellComponent', () => {
  let component: ActicleItenActionCellComponent;
  let fixture: ComponentFixture<ActicleItenActionCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActicleItenActionCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActicleItenActionCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
