import { ProductComponent } from '../pages/product/product.component';
import { ProductsComponent } from '../pages/products/products.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../pages/user/user.component';
import { UsersComponent } from '../pages/users/users.component';
import { CartComponent } from '../pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:userId', component: UserComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'carts', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];
