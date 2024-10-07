import { Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ContestPageComponent } from './contest-page/contest-page.component';
import { HomeComponent } from './homepage/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { RecipesPageComponent } from './recipespage/recipes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  
  {
    path:'login'
    ,component:LoginSignUpComponent
    ,title:'Login'
  },
  {
    path:''
    ,component:LayoutComponent
    ,children:[
      {
        path:'home'
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
    ]
  }
  
  
];




export default routes;