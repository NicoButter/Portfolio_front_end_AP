import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { BannerPersonalHeaderComponent } from './componentes/banner-personal-header/banner-personal-header.component';
import { AboutMiComponent } from './componentes/about-mi/about-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditAboutMiComponent } from './componentes/about-mi/edit-about-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    BannerPersonalHeaderComponent,
    AboutMiComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAboutMiComponent,
    NewExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
