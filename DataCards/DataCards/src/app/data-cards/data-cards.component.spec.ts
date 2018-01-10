import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardsComponent } from './data-cards.component';

describe('DataCardsComponent', () => {
  let component: DataCardsComponent;
  let fixture: ComponentFixture<DataCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
