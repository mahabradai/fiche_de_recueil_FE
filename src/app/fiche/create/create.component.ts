import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fiche } from '../fiche';
import { FicheService } from '../fiche.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'form { display: flex; flex-direction: column; min-width: 500px; }',
    'form > * { width: 100% }'
  ] ,

})
export class CreateComponent implements OnInit {
  panelOpenState = false;

  
  labelPosition: 'before' | 'after' = 'after';



  myControl = new FormControl('');
  Options=["0","1" , "2" , "3"] ;



  ficheForm: Fiche = {
    id: 0,
    pathologie: '',
    typeobservation: '',
    cas_familiaux: '',
   confirme: '' , 
  };
 
  constructor(private ficheService:FicheService,
    private router:Router) {}
    
 
    ngOnInit(): void {
      
    }
 
  save(){
    this.ficheService.create(this.ficheForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fiche/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  cancel() {
    this.router.navigate(['/fiche']);
  }
}