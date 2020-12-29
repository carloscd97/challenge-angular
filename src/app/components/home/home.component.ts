import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IChange } from 'src/app/core/models/change.model';
import { ICurrency } from 'src/app/core/models/currency.model';
import { CurrencyService } from 'src/app/core/services/currency/currency.service';
import { ICurrencyChangeViewModel } from 'src/app/core/viewmodels/ICurrencyChangeViewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewmodel: FormGroup;
  public currencyChanges: ICurrency[];
  public response: IChange;
  public seekChange: boolean;

  constructor(private _builderForm: FormBuilder, private service: CurrencyService) {
    this.seekChange = false;
    this.viewmodel = this._builderForm.group({
      amount: [0, Validators.required],
      idOriginCurrency: [0, Validators.required],
      idDestinationCurrency: [0, Validators.required],
    });
   }

  ngOnInit() {
    this.fillPage();
  }

  fillPage() {
    this.service.getCurrency().subscribe(currency => {
      this.currencyChanges = currency;
    });
  }

  change(values: FormGroup) {
    let currencychange: ICurrencyChangeViewModel = values.value;
    this.service.change(currencychange).subscribe(change => {
      this.response = change;
      this.seekChange = true;
    });
  }

}
