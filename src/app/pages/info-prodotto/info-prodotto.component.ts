import { ProdottoService } from './../../services/prodotto.service';
import { Prodotto } from './../../models/prodotto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './info-prodotto.component.html',
})
export class InfoProdottoComponent implements OnInit {
  prodotto?: Prodotto;

  constructor(
    private route: ActivatedRoute,
    private ProdottoService: ProdottoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.prodotto = this.ProdottoService.getProdottiById(id);
  }
}
