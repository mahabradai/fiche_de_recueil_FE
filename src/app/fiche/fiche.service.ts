import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fiche } from './fiche';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Fiche[]>('http://localhost:8080/fiche');
  }
  create(payload: Fiche) {
    return this.http.post<Fiche>('http://localhost:8080/fiche', payload);
  }
  getById(id: number) {
    return this.http.get<Fiche>(`http://localhost:8080/fiche/${id}`);
  }  
  update(payload: Fiche){
    return this.http.put(`http://localhost:8080/fiche`, payload);
}
delete(id:number){
  return this.http.delete<Fiche>(`http://localhost:8080/fiche/${id}`);
}

}
