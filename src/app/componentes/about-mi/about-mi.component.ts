import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-About-mi',
  templateUrl: './about-mi.component.html',
  styleUrls: ['./about-mi.component.css']
})
export class AboutMiComponent {
  persona: persona = null;
  
  constructor(public servicioPersona : PersonaService, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void{
    this.cargarPersona();
    if(this.tokenService.getToken())
      this.isLogged = true;
    else  
      this.isLogged = false; 
  }

  cargarPersona(){
    this.servicioPersona.detail(1).subscribe(data =>
      {this.persona = data}
    )
  }

}
