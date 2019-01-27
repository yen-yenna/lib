import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlsDzialajComponent } from './pls-dzialaj.component';

describe('PlsDzialajComponent', () => {
  let component: PlsDzialajComponent;
  let fixture: ComponentFixture<PlsDzialajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlsDzialajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlsDzialajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
