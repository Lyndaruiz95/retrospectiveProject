import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroboardComponent } from './retroboard.component';

describe('RetroboardComponent', () => {
  let component: RetroboardComponent;
  let fixture: ComponentFixture<RetroboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
