import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponentAddComponent } from './usuario.component-add.component';

describe('UsuarioComponentAddComponent', () => {
  let component: UsuarioComponentAddComponent;
  let fixture: ComponentFixture<UsuarioComponentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioComponentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioComponentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
