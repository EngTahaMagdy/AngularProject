import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { ArticleComponent } from './article/article.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';


const appRoutes:Routes=[
  {path:" ",component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'project',component:ProjectComponent},
  {path:'business' ,component:BusinessComponent},
  {path:'health',component:HealthComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'article/:id/:cat',component:ArticleComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ProjectComponent,
    FooterComponent,
    SearchPipe,
    ArticleComponent,
    BusinessComponent,
    HealthComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
