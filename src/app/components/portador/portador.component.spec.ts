import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadorComponent } from './portador.component';

describe('PortadorComponent', () => {
  let component: PortadorComponent;
  let fixture: ComponentFixture<PortadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
