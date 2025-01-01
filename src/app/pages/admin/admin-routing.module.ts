import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: "", loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: "products", loadComponent: () => import("./admin-products/admin-products.component").then(m => m.AdminProductsComponent) },
      { path: "orders", loadComponent: () => import("./orders-table/orders-table.component").then(m => m.OrdersTableComponent) },
      { path: "customers", loadComponent: () => import("./customers/customers.component").then(m => m.CustomersComponent) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
