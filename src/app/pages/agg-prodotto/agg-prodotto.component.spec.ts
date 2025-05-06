import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggProdottoComponent } from './agg-prodotto.component';

describe('AggProdottoComponent', () => {
  let component: AggProdottoComponent;
  let fixture: ComponentFixture<AggProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggProdottoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
