import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu3Component } from './menu3.component';

describe('Menu3Component', () => {
  let component: Menu3Component;
  let fixture: ComponentFixture<Menu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Menu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
