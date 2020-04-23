import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankComponent} from './pages/blank/blank.component';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
    {path: '', loadChildren: () => import('./pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule)},
    {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)},
    {path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)},
    {path: 'user', component: BlankComponent, canActivate: [AuthGuard]},
    //Main Admin
    {path: 'dashboard', loadChildren: () => import('./pages/main-admin/users/users.module').then(m => m.UsersPageModule), canActivate: [AuthGuard]},
    {path: 'languages', loadChildren: () => import('./pages/main-admin/language/language.module').then(m => m.LanguagePageModule), canActivate: [AuthGuard]},
    {path: 'countries', loadChildren: () => import('./pages/main-admin/country/country.module').then(m => m.CountryPageModule), canActivate: [AuthGuard]},
    {path: 'shops', loadChildren: () => import('./pages/main-admin/shop/shop.module').then(m => m.ShopPageModule), canActivate: [AuthGuard]},
    {path: 'profiles', loadChildren: () => import('./pages/main-admin/profile/profile.module').then(m => m.ProfilePageModule), canActivate: [AuthGuard]},
    {path: 'assign_auth', loadChildren: () => import('./pages/main-admin/assign-auth/assign-auth.module').then(m => m.AssignAuthPageModule), canActivate: [AuthGuard]},
    //Shop Admin
    {path: 'shopadmin/users', loadChildren: () => import('./pages/shop-admin/users/users.module').then(m => m.UsersPageModule), canActivate: [AuthGuard]},
    {path: 'shopadmin/profile', loadChildren: () => import('./pages/shop-admin/profile/profile.module').then(m => m.ProfilePageModule), canActivate: [AuthGuard]},
    {path: '**', redirectTo: '/home-results'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}