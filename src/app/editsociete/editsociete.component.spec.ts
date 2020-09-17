import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsocieteComponent } from './editsociete.component';

describe('EditsocieteComponent', () => {
  let component: EditsocieteComponent;
  let fixture: ComponentFixture<EditsocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
