import { Prodotto } from './../../models/prodotto';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-prodotto',
  imports: [],
  templateUrl: './card-prodotto.component.html',
  styleUrl: './card-prodotto.component.scss',
})
export class CardProdottoComponent {
  @Input() prodotto!: Prodotto;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/info-prodotto', this.prodotto.id]);
  }
}
