import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodalPage } from './loginmodal.page';

describe('LoginmodalPage', () => {
  let component: LoginmodalPage;
  let fixture: ComponentFixture<LoginmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
