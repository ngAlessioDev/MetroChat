import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Windows11Component } from './windows11.component';

describe('Windows11Component', () => {
  let component: Windows11Component;
  let fixture: ComponentFixture<Windows11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Windows11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Windows11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
