import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoImagemComponent } from './produto-imagem.component';

describe('ProdutoImagemComponent', () => {
  let component: ProdutoImagemComponent;
  let fixture: ComponentFixture<ProdutoImagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoImagemComponent]
    });
    fixture = TestBed.createComponent(ProdutoImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
