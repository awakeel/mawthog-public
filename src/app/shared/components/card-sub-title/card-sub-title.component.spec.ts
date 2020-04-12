import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubTitleComponent } from './card-sub-title.component';

describe('CardSubTitleComponent', () => {
  let component: CardSubTitleComponent;
  let fixture: ComponentFixture<CardSubTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSubTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
