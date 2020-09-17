import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEmplyeComponent } from './nouveau-emplye.component';

describe('NouveauEmplyeComponent', () => {
  let component: NouveauEmplyeComponent;
  let fixture: ComponentFixture<NouveauEmplyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEmplyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEmplyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
