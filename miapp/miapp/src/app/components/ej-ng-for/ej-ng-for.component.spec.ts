import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjNgForComponent } from './ej-ng-for.component';

describe('EjNgForComponent', () => {
  let component: EjNgForComponent;
  let fixture: ComponentFixture<EjNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
