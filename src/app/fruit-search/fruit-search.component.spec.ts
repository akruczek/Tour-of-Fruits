import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitSearchComponent } from './fruit-search.component';

describe('FruitSearchComponent', () => {
  let component: FruitSearchComponent;
  let fixture: ComponentFixture<FruitSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
