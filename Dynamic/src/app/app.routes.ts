import { Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ContestPageComponent } from './contest-page/contest-page.component';
import { HomeComponent } from './homepage/home.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { RecipesPageComponent } from './recipespage/recipes.component';

const routes: Routes = [
  
  {
    path:'login'
    ,component:LoginSignUpComponent
    ,title:'Login'
  },
  {
    path:''
    ,component:HomeComponent
    ,title:'Home'
  },
  {
    path:'contest',
    component:ContestPageComponent,
    title:'Contest'
  },

  {
    path:'contact',
    component:ContactpageComponent,
    title:'Contact'
  }
  ,{
    path:'recipes'
    ,component:RecipesPageComponent
    ,title:'Recipes'
  }
  
];




export default routes;