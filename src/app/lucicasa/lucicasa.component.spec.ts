import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucicasaComponent } from './lucicasa.component';

describe('LucicasaComponent', () => {
  let component: LucicasaComponent;
  let fixture: ComponentFixture<LucicasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LucicasaComponent]
    });
    fixture = TestBed.createComponent(LucicasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
