import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: "", loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: "products", loadComponent: () => import("./admin-products/admin-products.component").then(m => m.AdminProductsComponent) },
      { path: "orders", loadComponent: () => import("./orders-table/orders-table.component").then(m => m.OrdersTableComponent) },
      { path: "customers", loadComponent: () => import("./customers/customers.component").then(m => m.CustomersComponent) },
      {path:"create-product",loadComponent:()=>import("./create-product/create-product.component").then(m=>m.CreateProductComponent)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
