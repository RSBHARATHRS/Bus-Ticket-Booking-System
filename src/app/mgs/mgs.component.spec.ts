import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgsComponent } from './mgs.component';

describe('MgsComponent', () => {
  let component: MgsComponent;
  let fixture: ComponentFixture<MgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
