import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-edit-about-mi',
  templateUrl: './edit-about-mi.component.html',
  styleUrls: ['./edit-about-mi.component.css']
})

export class EditAboutMiComponent {
  
  Persona: persona = null;
  
  constructor(public imageService: ImageService, private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router){}
  
  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.Persona = data; 
      }, err =>{
        alert("Ocurrio un error al intentar modificar el registro, reintente.");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id']
    this.Persona.img = this.imageService.url;
    this.personaService.update(id, this.Persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al intentar modificar el registro about-me, reintente.");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    //const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + 1;
    this.imageService.uploadImage($event, name);
  }

}
