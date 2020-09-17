import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauSocieteComponent } from './nouveau-societe.component';

describe('NouveauSocieteComponent', () => {
  let component: NouveauSocieteComponent;
  let fixture: ComponentFixture<NouveauSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
