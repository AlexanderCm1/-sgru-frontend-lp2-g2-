import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEvaluacionComponent } from './menu-evaluacion.component';

describe('MenuEvaluacionComponent', () => {
  let component: MenuEvaluacionComponent;
  let fixture: ComponentFixture<MenuEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
