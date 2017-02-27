import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendaAngularComponent } from './aprenda-angular.component';

describe('AprendaAngularComponent', () => {
  let component: AprendaAngularComponent;
  let fixture: ComponentFixture<AprendaAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendaAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
