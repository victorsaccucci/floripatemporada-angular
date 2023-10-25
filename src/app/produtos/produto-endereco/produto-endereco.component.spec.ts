import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEnderecoComponent } from './produto-endereco.component';

describe('ProdutoEnderecoComponent', () => {
  let component: ProdutoEnderecoComponent;
  let fixture: ComponentFixture<ProdutoEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoEnderecoComponent]
    });
    fixture = TestBed.createComponent(ProdutoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
