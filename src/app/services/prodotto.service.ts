import { Prodotto } from '../models/prodotto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  private prodotti: Prodotto[] = [
    { id: 1, name: 'Laptop', description: 'Laptop HP', price: 1200 },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Smartphone Samsung',
      price: 800,
    },
  ];

  getProdotti(): Prodotto[] {
    return this.prodotti;
  }
  getProdottiById(id: number): Prodotto | undefined {
    return this.prodotti.find((prodotto) => prodotto.id === id);
  }
  addProdotto(prodotto: Prodotto): void {
    this.prodotti.push(prodotto);
  }
}
