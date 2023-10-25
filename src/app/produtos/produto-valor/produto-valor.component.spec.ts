import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoValorComponent } from './produto-valor.component';

describe('ProdutoValorComponent', () => {
  let component: ProdutoValorComponent;
  let fixture: ComponentFixture<ProdutoValorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoValorComponent]
    });
    fixture = TestBed.createComponent(ProdutoValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
