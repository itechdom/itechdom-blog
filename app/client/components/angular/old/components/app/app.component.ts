import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { OrdersComponent } from '../orders/orders.component';

@Component({ 
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', as: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/orders/:id', as: 'Orders', component: OrdersComponent    }
])
export class AppComponent {

}
