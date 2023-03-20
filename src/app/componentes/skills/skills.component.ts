import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  
  skill: Skills[] = [];
  
  constructor(private skillService: SkillsService, private tokenService: TokenService){}  
  
  isLogged = false;
  
  ngOnInit(): void{
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.lista().subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("ERRORRRRRRR 22");
      } 
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("Error al tratar de eliminar la habilidad.");
        }
      )
    }
  }

}
