import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitornoComponent } from './ritorno.component';

describe('RitornoComponent', () => {
  let component: RitornoComponent;
  let fixture: ComponentFixture<RitornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitornoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RitornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
