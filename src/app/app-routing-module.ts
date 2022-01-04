import { NgModule } from "@angular/core"
import { Routes, RouterModule} from "@angular/router"
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component"
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component"
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component"
import { ProductAddComponent } from "./components/product-add/product-add.component"

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'product-add', component: ProductAddComponent},
    { path: 'shop', component: ShoppingCartComponent},
    { path: 'shop/category/:catID', component: ShoppingCartComponent},
    { path: 'shop/price/:price', component: ShoppingCartComponent},
    { path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: []
})

export class AppRoutingModule {

}