import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonomaComponent } from './sonoma.component';

describe('SonomaComponent', () => {
  let component: SonomaComponent;
  let fixture: ComponentFixture<SonomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonomaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SonomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
