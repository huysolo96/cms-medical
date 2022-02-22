import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiseaseItemDialogFormComponent } from './edit-disease-item-dialog-form.component';

describe('EditDiseaseItemDialogFormComponent', () => {
  let component: EditDiseaseItemDialogFormComponent;
  let fixture: ComponentFixture<EditDiseaseItemDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiseaseItemDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiseaseItemDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
