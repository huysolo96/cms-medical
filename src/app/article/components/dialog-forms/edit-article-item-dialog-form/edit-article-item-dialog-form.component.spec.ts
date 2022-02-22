import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleItemDialogFormComponent } from './edit-article-item-dialog-form.component';

describe('EditArticleItemDialogFormComponent', () => {
  let component: EditArticleItemDialogFormComponent;
  let fixture: ComponentFixture<EditArticleItemDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticleItemDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleItemDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
