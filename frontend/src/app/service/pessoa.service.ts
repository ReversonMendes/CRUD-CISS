import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pessoa } from '../models/pessoa.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PessoaService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/backend/cadastros';
  
  public getPessoas() {
    console.log("to chamando")
    return this.http.get<Pessoa[]>(this.baseUrl);
  }

  public deletePessoa(pessoa) {
    return this.http.delete(this.baseUrl + "/" + pessoa.id);
  }

  public createPessoa(pessoa) {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  public getPessoaId(id) {
    console.log(id)
    return this.http.get(this.baseUrl + "/" + id);
  }

  public updatePessoa(pessoa) {
    return this.http.put<Pessoa>(this.baseUrl + "/" + pessoa.id, pessoa);
  }

}
