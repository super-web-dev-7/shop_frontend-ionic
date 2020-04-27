import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAuthPage } from './assign-auth.page';

describe('AssignAuthPage', () => {
  let component: AssignAuthPage;
  let fixture: ComponentFixture<AssignAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
