import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: []
})
export class PessoasComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private router: Router, private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(data => {
      this.pessoas = data;
    }, error => {
      alert('Oh não! aconteceu um erro! -> ' + error)
    })
  }


  excluirPessoa(pessoa: Pessoa): void {
    this.pessoaService.deletePessoa(pessoa).subscribe(data => {
      this.pessoas = this.pessoas.filter(u => u !== pessoa);
    }, error => {
      alert('Oh não! aconteceu um erro! -> ' + error)
    })

  }


}
