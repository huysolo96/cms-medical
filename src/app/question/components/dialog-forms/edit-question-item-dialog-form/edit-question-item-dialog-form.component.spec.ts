import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionItemDialogFormComponent } from './edit-question-item-dialog-form.component';

describe('EditQuestionItemDialogFormComponent', () => {
  let component: EditQuestionItemDialogFormComponent;
  let fixture: ComponentFixture<EditQuestionItemDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionItemDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionItemDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
