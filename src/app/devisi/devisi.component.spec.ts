import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisiComponent } from './devisi.component';

describe('DevisiComponent', () => {
  let component: DevisiComponent;
  let fixture: ComponentFixture<DevisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
