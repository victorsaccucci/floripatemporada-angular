import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoInformacoesComponent } from './produto-informacoes.component';

describe('ProdutoInformacoesComponent', () => {
  let component: ProdutoInformacoesComponent;
  let fixture: ComponentFixture<ProdutoInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoInformacoesComponent]
    });
    fixture = TestBed.createComponent(ProdutoInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
