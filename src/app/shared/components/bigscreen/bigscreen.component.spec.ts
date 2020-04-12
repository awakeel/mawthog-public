import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigscreenComponent } from './bigscreen.component';

describe('BigscreenComponent', () => {
  let component: BigscreenComponent;
  let fixture: ComponentFixture<BigscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
