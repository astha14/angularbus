import { Component, Input, OnInit } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
Fare?:any;
  constructor(private service:BusService) { }

  ngOnInit(): void {
    this.service.CurrentFare.subscribe(Fare=>this.Fare=Fare)
  }


}
