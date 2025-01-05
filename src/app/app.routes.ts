import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [

    { path: "", loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: "cart", loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
    { path: "product-details/:id", loadComponent: () => import('./pages/product-details/product-details.component').then(m => m.ProductDetailsComponent) },
    { path: "checkout", loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
    { path: "payment-success", loadComponent: () => import('./pages/payment-success/payment-success.component').then(m => m.PaymentSuccessComponent) },
    { path: "account/orders", loadComponent: () => import('./pages/orders/orders.component').then(m => m.OrdersComponent) },
    { path: "orders:id", loadComponent: () => import('./pages/order-details/order-details.component').then(m => m.OrderDetailsComponent) },
    { path: "checkout/payment/:id", loadComponent: () => import('./pages/payment/payment.component').then(m => m.PaymentComponent) },
    { path: ":level1/:level2/:level3", loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
    { path: "admin", loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }
];
