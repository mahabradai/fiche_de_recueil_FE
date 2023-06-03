import { Component, OnInit } from '@angular/core';
import { Fiche } from '../fiche';
import { FicheService } from '../fiche.service';

declare var window: any;

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styles: [
'table { min-width: 600px }',
]
})
export class HomeComponent implements OnInit {
    displayedColumns = ['id', 'pathologie', 'typeobservation', 'cas_familiaux', 'confirme','actions'];
    selectedFiche!: Fiche;
feedback: any = {};
deleteModal: any;
idToDelete: number = 0;
allFiches: Fiche[] = [];


constructor(private ficheService: FicheService) {}

ngOnInit(): void {
//this.deleteModal = new window.bootstrap.Modal(
//document.getElementById('deleteModal')
//);
this.getallFiches();
}

getallFiches(): void {
this.ficheService.get().subscribe((data: Fiche[]) => {
this.allFiches = data;
});
}

openDeleteModal(id: number): void {
this.idToDelete = id;
this.deleteModal.show();
}

select(selected: Fiche): void {
this.selectedFiche = selected;
}

delete(fiche: Fiche): void {
if (confirm('Are you sure?')) {
this.ficheService.delete(fiche.id).subscribe(
() => {
this.feedback = { type: 'success', message: 'Delete was successful!' };
setTimeout(() => {
this.feedback = null;
}, 1000);
},
(err) => {
this.feedback = { type: 'warning', message: 'Error deleting.' };
}
);
}
}
}






