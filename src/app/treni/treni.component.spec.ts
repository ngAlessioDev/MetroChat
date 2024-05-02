import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreniComponent } from './treni.component';

describe('TreniComponent', () => {
  let component: TreniComponent;
  let fixture: ComponentFixture<TreniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreniComponent]
    });
    fixture = TestBed.createComponent(TreniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
