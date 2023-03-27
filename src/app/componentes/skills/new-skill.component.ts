import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
/*import { ImageService } from 'src/app/service/image.service';*/


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})

export class NewSkillComponent {

  nombre: string;
  porcentaje: number;
  /*img: string;*/

  constructor(/*public imageService: ImageService, */private skills: SkillsService, private router: Router, private activatedRouter: ActivatedRoute){}

  ngOnInit(){}

  onCreate(): void{
    const skill = new Skills(this.nombre, this.porcentaje /*,this.img*/);
    this.skills.save(skill).subscribe(
      data => {
        alert("Habilidad creada correctamente.");
        this.router.navigate([""]);
      }, err =>{
        alert("Error al añadir la habilidad, reintente.");
        this.router.navigate([""]);
      }
    )
  }

  /*uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'skill_' + id;
    this.imageService.uploadImage($event, name);
  }*/

}
