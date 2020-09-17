import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmplyeComponent } from './edit-emplye.component';

describe('EditEmplyeComponent', () => {
  let component: EditEmplyeComponent;
  let fixture: ComponentFixture<EditEmplyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmplyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmplyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
