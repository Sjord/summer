import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignedNumberComponent } from './aligned-number.component';

describe('AlignedNumberComponent', () => {
  let component: AlignedNumberComponent;
  let fixture: ComponentFixture<AlignedNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignedNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
