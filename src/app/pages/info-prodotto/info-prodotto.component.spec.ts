import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProdottoComponent } from './info-prodotto.component';

describe('InfoProdottoComponent', () => {
  let component: InfoProdottoComponent;
  let fixture: ComponentFixture<InfoProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProdottoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
