import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({ 
  selector: 'orders',
  providers: [DataService],
  templateUrl: 'app/components/orders/orders.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class OrdersComponent {
	
	  title: string = 'Orders';
	
    constructor(private dataService: DataService) {

    }
    
    ngOnInit() {
      //Load orders here (hard-coded for now)
    }
}
