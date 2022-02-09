import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreativosComponent } from './formularioreativos.component';

describe('FormularioreativosComponent', () => {
  let component: FormularioreativosComponent;
  let fixture: ComponentFixture<FormularioreativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioreativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioreativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
