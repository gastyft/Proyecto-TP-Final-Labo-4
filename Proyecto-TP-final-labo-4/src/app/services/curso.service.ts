import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
 

  url="http://localhost:8080/curso"
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }
  getCursoById(id: number): Observable<Curso> {
    return this.http.get<Curso>(this.url+"/"+id);
  }
  createCurso(curso: Curso, profesorId: number): Observable<any> {
    return this.http.post(this.url + "/"+profesorId, curso, { responseType: 'text' as 'json' });
}

  updateCurso(curso: Curso,idCurso:number): Observable<Curso> {
    return this.http.put<Curso>(this.url+ "/"+idCurso+`?titulo=${curso.titulo}&descripcion=${curso.descripcion}`, curso );
  } 
  deleteCurso(id: number): Observable<any> {
    return this.http.delete(this.url+"/"+id, { responseType: 'text' as 'json' });
  }

}
