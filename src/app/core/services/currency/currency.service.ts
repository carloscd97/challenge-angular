import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IChange } from '../../models/change.model';
import { ICurrency } from '../../models/currency.model';
import { ICurrencyChangeViewModel } from '../../viewmodels/ICurrencyChangeViewModel';
import { UnitOfWorkService } from '../unitOfWork/unit-of-work.service';

@Injectable()
export class CurrencyService {

  constructor(private unitOfWork: UnitOfWorkService) { }

  getCurrency(): Observable<ICurrency[]> {
    return this.unitOfWork.get<ICurrency[]>('/v1/currency');
  }

  change(currencyexchange: ICurrencyChangeViewModel): Observable<IChange> {
    let url = `/v1/currency/change?Amount=${currencyexchange.amount}&IdOriginCurrency=${currencyexchange.idOriginCurrency}&IdDestinationCurrency=${currencyexchange.idDestinationCurrency}`;
    return this.unitOfWork.get<IChange>(url);
  }
}
