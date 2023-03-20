import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})

export class NewSkillComponent {

  nombre: string;
  porcentaje: number;

  constructor(private skills: SkillsService, private router: Router){}

  ngOnInit(){}

  onCreate(): void{
    const skill = new Skills(this.nombre, this.porcentaje);
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

}
