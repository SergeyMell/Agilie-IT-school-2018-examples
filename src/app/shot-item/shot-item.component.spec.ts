import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotItemComponent } from './shot-item.component';

describe('ShotItemComponent', () => {
  let component: ShotItemComponent;
  let fixture: ComponentFixture<ShotItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
