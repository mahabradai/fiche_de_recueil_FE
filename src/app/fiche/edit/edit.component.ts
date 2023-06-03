import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fiche} from '../fiche';
import { FicheService } from '../fiche.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {

  //checkbox
  labelPosition: 'before' | 'after' = 'after';
                  //
  ficheForm: Fiche = {
    id: 0,
    pathologie: '',
    typeobservation: '',
    cas_familiaux: '',
    confirme : '' , 
   
    
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private ficheService:  FicheService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.ficheService.getById(id).subscribe((data) => {
      this.ficheForm = data;
    });
  }
 
  update() {
    this.ficheService.update(this.ficheForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fiche/home"]);
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