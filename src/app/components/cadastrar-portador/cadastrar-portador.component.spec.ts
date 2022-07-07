import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPortadorComponent } from './cadastrar-portador.component';

describe('CadastrarPortadorComponent', () => {
  let component: CadastrarPortadorComponent;
  let fixture: ComponentFixture<CadastrarPortadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPortadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPortadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
