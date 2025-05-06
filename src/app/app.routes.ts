import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AggProdottoComponent } from './pages/agg-prodotto/agg-prodotto.component';
import { InfoProdottoComponent } from './pages/info-prodotto/info-prodotto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aggiungi-prodotto', component: AggProdottoComponent },
  { path: 'info-prodotto/:id', component: InfoProdottoComponent },
];
