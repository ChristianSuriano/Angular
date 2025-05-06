import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../services/prodotto.service';
import { Prodotto } from '../../models/prodotto';
import { CardProdottoComponent } from '../../components/card-prodotto/card-prodotto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardProdottoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  prodotti: Prodotto[] = [];

  constructor(private prodottoService: ProdottoService) {}

  ngOnInit(): void {
    this.prodotti = this.prodottoService.getProdotti();
  }
}
