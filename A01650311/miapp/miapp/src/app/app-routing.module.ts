import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ParentcomponentComponent } from './components/parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './components/childcomponent/childcomponent.component';
import { EjNgForComponent } from './components/ej-ng-for/ej-ng-for.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'parent', component: ParentcomponentComponent},
  {path: 'child', component: ChildcomponentComponent},
  {path: 'EjNgFor', component: EjNgForComponent},
  {path: 'NgModel', component: NgModelComponent},
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
