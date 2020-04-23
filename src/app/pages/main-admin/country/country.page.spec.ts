import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPage } from './country.page';

describe('CountryPage', () => {
  let component: CountryPage;
  let fixture: ComponentFixture<CountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
